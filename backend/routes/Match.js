const express = require('express');
const { Op } = require('sequelize');
const { Rencontre, Equipe, Tournoi, Categorie, db, Joueur, Jouer } = require('../db_modules/dbModel');
const { response } = require('./tournoi');
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
                        attributes : ['PrenomJoueur'] , 
                        include: {
                            model : Equipe, 
                            attributes : ['NomEquipe','refEquipe']
                        }
                    }
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
    if( req.body.DateRencontre && req.body.HeureRencontre && req.body.CategorieIdCategorie && req.body.LieuRencontre) {
        await db.authenticate(); 
        // creer l'objet rencontre
        const rencontre  =  await Rencontre.create({
            DateRencontre : req.body.DateRencontre,
            HeureRencontre : req.body.HeureRencontre,
            LieuRencontre : req.body.LieuRencontre,
            CategorieIdCategorie : +req.body.CategorieIdCategorie
        }) ; 

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
        for (let index = 0; index < AllPlayersID.length; index++) {
            const jouer = await Jouer.create({
                JoueurIDJoueur : +(AllPlayersID[index]),
                RENCONTREIdRencontre : +idRencontre
            })
            
        }

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


module.exports = router;


// creer le tournoi
// alimenter la table jouer
    // [all players whith ClassUp]
