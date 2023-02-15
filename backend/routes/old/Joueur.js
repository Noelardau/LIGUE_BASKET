const express = require('express');
const { db, Joueur, Equipe, Categorie } = require('../db_modules/dbModel');
const router = express();


router.get('/', async function(req, res, next) {
    try {
        if(req.query.id.trim()){
            await db.authenticate();
         
            const joueur = await Joueur.findOne({
                where : {
                    IDJoueur : req.query.id
                } , 
                include : [
                    { model : Equipe, attributes : ['NomEquipe']},
                    {model : Categorie, attributes : ['Label']}
                ]
            })
            if(joueur) {
                const response  = {
                    Status : 'OK',
                    Body : JSON.parse(JSON.stringify(joueur, null , 4))
                } ; 

                res.json(JSON.stringify(response));
            } else throw new Error('Joueur not found');
        } else throw new Error('idJoueur must be provided');
    } catch (error) {
        next(new Error(error.message))
    }
})


router.post('/create', async function(req, res, next) {
    try {
        if(!(req.body.NumJoueur && req.body.PrenomJoueur && req.body.DAN && req.body.EquipeRefEquipe && req.body.CategorieIdCategorie)) {
            throw new Error('Mandatory fields should be provided')
        } else {
            await db.authenticate() ; 
            const joueur = await Joueur.create({
                        NomJoueur : req.body.NomJoueur,
                        PrenomJoueur : req.body.PrenomJoueur,
                        NumJoeur : +req.body.NumJoeur,
                        DAN : req.body.DAN, 
                        CIN: req.body.CIN,
                        EquipeRefEquipe : +req.body.EquipeRefEquipe,
                        CategorieIdCategorie : +req.body.CategorieIdCategorie, 
            }); 
    
            const joueurObject = await Joueur.findOne({
                order : [['IDJoueur', 'DESC']], 
                include : [
                    { model : Equipe, attributes : ['NomEquipe']},
                    {model : Categorie, attributes : ['Label']}
                ]
            })
    
            res.json(JSON.stringify(joueurObject, null, 4));
        }
    } catch (error) {
        next(new Error(error.message))
    }
})




module.exports = router;