const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { Rencontre, Equipe, Tournoi, Categorie, db, Joueur, Jouer } = require('../db_modules/dbModel');
const router = express();

router.get('/', async function(req, res, next) {
    try {
        if(req.query.id) {
            const rencontre  = await Rencontre.findOne({
                where : {
                    idRencontre : +req.query.id
                } , 
                include : [
                    {model : Equipe, attributes : ['NomEquipe','RefEquipe']},
                    {model : Tournoi, attributes : ['NomTournoi']},
                    {model : Categorie, attributes : ['Label']}, 
                    {
                        model : Joueur , 
                        attributes : ['NomJoueur','PrenomJoueur'] , 
                        include: {
                            model : Equipe, 
                            attributes : ['NomEquipe','refEquipe']
                        }
                    },
                    
                ]
            })

            if(rencontre) {
                const response = {
                    Status : 'OK',
                    Body : JSON.parse(JSON.stringify(rencontre, null, 4))
                }

                res.json(JSON.stringify(response));
            } else throw new Error('Match not found')
        } else throw new Error('idRencontre must be provided')
    } catch (error) {
        next(new Error(error.message))
    }
})


router.post('/create', async function(req, res, next){
    if( req.body.DateRencontre && req.body.HeureRencontre && req.body.CategorieIdCategorie && req.body.LieuRencontre && req.body.TournoiRefTournoi) {
        await db.authenticate(); 
        // creer l'objet rencontre
        // const rencontre  =  await Rencontre.create({
        //     TournoiRefTournoi : +req.body.TournoiRefTournoi , 
        //     DateRencontre : req.body.DateRencontre,
        //     HeureRencontre : req.body.HeureRencontre,
        //     LieuRencontre : req.body.LieuRencontre,
        //     CategorieIdCategorie : +req.body.CategorieIdCategorie
        // }) ; 
        await db.query(`INSERT INTO Rencontre (createdAt, updatedAt, TournoiRefTournoi, DateRencontre, HeureRencontre, LieuRencontre, CategorieIdCategorie) values ('2023-02-15 08:00:14','2023-02-15 08:00:14','${+req.body.TournoiRefTournoi}', '${req.body.DateRencontre}','${req.body.HeureRencontre}', '${req.body.LieuRencontre}', '${+req.body.CategorieIdCategorie}')`)
        // recuperer son Id
        const rencontreObject = await Rencontre.findOne({
            order: [['idRencontre', 'DESC']]
        })

        const idRencontre = rencontreObject.idRencontre ;
        
        // recuperer tous les joueurs des equipes fournies et ayant la mm categorie
        const AllPlayerAllTeam = await Joueur.findAll({
            where : {
                CategorieIdCategorie : +req.body.CategorieIdCategorie
            } , 
            include : {
                model : Equipe , 
                attributes : [] , 
                where : {
                    [Op.or] : [
                        {RefEquipe : +req.body.EquipeA.RefEquipe} , 
                        {RefEquipe : +req.body.EquipeB.RefEquipe}  
                    ]
                }
            } ,
            attributes : ['IDJoueur','NomJoueur','PrenomJoueur']
        })


        // ercuperer tous les joueurs surclassé founis
        const allPlayersClassUpPerTeam = [...req.body.EquipeA.ClassUp, ...req.body.EquipeB.ClassUp]

        

        // rassembler tous lesIDJoueurs et IDJoueurSurclassés dans un mm tableau
        let AllPlayersID = []
        for (let index = 0; index < AllPlayerAllTeam.length; index++) {
            AllPlayersID[index] = AllPlayerAllTeam[index].IDJoueur;
            
        }

        AllPlayersID = [AllPlayersID, ...allPlayersClassUpPerTeam]


        // tous les inserer dans la table JOUER pour qu-ils participent dans la rencontre en question
        AllPlayersID.forEach(async function(item){
            const jouer = await Jouer.create({
                JoueurIDJoueur : item,
                RENCONTREIdRencontre : idRencontre
            })
        }) 

        // const AllPlayersForThisGame = await rencontre.findOne({
        //     where : {
        //         idRencontre : idRencontre
        //     },
        //     include : {
        //         model : Jouer,
        //         include : {
        //             model : Joueur,
        //             attributes : ['NomJoueur','PrenomJoueur']
        //         }
        //     }
        // })

        const response = {
            Status : 'OK', 
            Body : {
                idRencontre : idRencontre
            }
        }

        res.json(JSON.stringify(response)); 

    } else {
        throw new Error('Mandatory fields should be provided')
    }
})

async function createJouer() {
        const jouer = await Jouer.create({
            JoueurIDJoueur : +(AllPlayersID[index]),
            RENCONTREIdRencontre : +idRencontre
        })
}
module.exports = router;


// creer le tournoi
// alimenter la table jouer
    // [all players whith ClassUp]


    // async function CreateTournoi() {
    //     // verifier les required
    //     // tables concernés : effectuer jouer rencontre
    //     // insert into rencontre
    //     // insert into effectuer
    //     // insert into jouer

    //     if()
    // }

    // async function InsertIntoRencontre() {
    //     // HeureRencontre
    //     // DateRencontre
    //     // TorunoiRefTournoi
    //     // CategorieIdCategorie
    //     // LieuRencontre

    //         const rencontre  =  await Rencontre.create({
    //             TournoiRefTournoi : req.body.TournoiRefTournoi , 
    //             DateRencontre : req.body.DateRencontre,
    //             HeureRencontre : req.body.HeureRencontre,
    //             LieuRencontre : req.body.LieuRencontre,
    //             CategorieIdCategorie : +req.body.CategorieIdCategorie
    //         }) ; 

    //         const idRencontre = await Rencontre.findOne({
    //             order : [['idRencontre','DESC']]
    //         })

    //         return idRencontre.idRencontre;

    // }