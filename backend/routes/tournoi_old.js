const express = require('express');
const { Tournoi , db, Participer, Equipe} = require('../db_modules/dbModel');
const router = express();


router.post('/create', async (req, res, next) => {
    try {
       await db.authenticate();
       if(req.body?.Nom?.trim() && req.body?.Debut?.trim() && req.body?.Fin?.trim() && req.body?.Lieu?.trim()) {
            const tournoi = await  Tournoi.create({
                NomTournoi : req.body.Nom ,
                DateDebutTournoi : req.body.Debut ,
                DateFinTournoi: req.body.Fin ,
                LieuTournoi: req.body.lieu 
            }); 

            const enityTournoi = await Tournoi.findOne({
                order : [['RefTournoi','DESC']]
            })
            const responseObject = {
                Status : 'OK',
                Body : JSON.stringify(enityTournoi, null, 4)
            } 

            res.json(JSON.stringify(responseObject));
       } else {
        throw new Error('Some fields empty');
       }
    } catch (error) {
        next(new Error(error.message));
    }
})


router.get('/', async (req, res, next) => {
    try {
        await db.authenticate();
        if(req.query?.id?.trim()) {
            const tournoi = await Tournoi.findOne({
                where: {
                    RefTournoi : req.query.id
                }, 
                attributes : ['NomTournoi', 'RefTournoi', 'DateDebutTournoi','DateFinTournoi','LieuTournoi'],
                include : {
                    model : Equipe,
                    attributes: ["RefEquipe",'NomEquipe'],
                    through : []
                }
            }) 

            if(tournoi) {
                const response  = {
                    Status : 'OK',
                    Body : JSON.stringify(tournoi, null, 4)
                };
    
                res.json(JSON.stringify(response));
            } else {
                throw new Error('Tournoi not found');
            }

           
        } else {
            throw new Error('RefTournoi must be provided');
        }
    } catch (error) {
            next(new Error(error.message));
    }
    
})


module.exports = router; 