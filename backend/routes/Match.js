const express = require('express');
const { Rencontre, Equipe, Tournoi, Categorie, db } = require('../db_modules/dbModel');
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
                    {model : Equipe, attributes : ['NomEquipe']},
                    {model : Tournoi, attributes : ['NomTournoi']},
                    {model : Categorie, attributes : ['Label']}
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
        
    }
})


router.post('/create', async function(req, res, next){
    if( req.body.DateRencontre && req.body.HeureRencontre && req.body.CategorieIdCategorie && req.body.LieuRencontre) {
        await db.authenticate(); 
        const rencontre  =  await Rencontre.create({
            DateRencontre : req.body.DateRencontre,
            HeureRencontre : req.body.HeureRencontre,
            LieuRencontre : req.body.heureRencontre ,
            CategorieIdCategorie : req.body.CategorieIdCategorie
        }) ; 

        
    } else {
        throw new Error('Mandatory fields should be provided')
    }
})


module.exports = router;