const { JSONCookies } = require('cookie-parser');
const express = require('express');
const { Tournoi , db, Participer, Equipe} = require('../db_modules/dbModel');
const router = express();


router.post('/create', async (req, res, next) => {
   try {
        await db.authenticate() 
        if(req.body.NomTournoi && req.body.DateDebutTournoi && req.body.DateFinTournoi && req.body.LieuTournoi) {
                const tournoi  = await Tournoi.create({
                    NomTournoi : req.body.NomTournoi , 
                    DateDebutTournoi: req.body.DateDebutTournoi, 
                    DateFinTournoi : req.body.DateFinTournoi , 
                    LieuTournoi : req.body.LieuTournoi
                }) ; 

                const tournoiEntity = await Tournoi.findOne({
                    order : [['RefTournoi', 'DESC']]
                })

                const tournoiResponseJson = await getTournoi(tournoiEntity.RefTournoi) ; 

                if(tournoiResponseJson) {
                    res.json(tournoiResponseJson);
                } else {
                    throw error('Tournoi not found');
                }
    
        } else {
            throw new Error('Mandatory field should be provided');
        }
   } catch (error) {
        next(new Error(error.message))
   }
})


router.get('/', async (req, res, next) => {
    try {
        await db.authenticate();
        if(req.query.id?.trim()) {
           const tournoiResponseJson = await getTournoi(+req.query.id)

           if(tournoiResponseJson) {
            res.json(tournoiResponseJson);
        } else {
            throw error('Tournoi not found');
        }
        } else {
            throw new Error('RefTournoi must be provided');
        }
    } catch (error) {
            next(new Error(error.message));
    }
    
})

async function getTournoi(idTournoi) {
    const tournoiEntity = await Tournoi.findOne({
        where : {
            RefTournoi : idTournoi
        } , 
        include : {
            model : Equipe , 
            attributes : ['NomEquipe','RefEquipe']
        }
    });

    if(tournoiEntity) {
        const response = {
            Status : 'OK',
            Body : JSON.parse(JSON.stringify(tournoiEntity, null, 4))
        }

        return JSON.stringify(response);
    } else {
        return null;
    }

}
module.exports = router; 