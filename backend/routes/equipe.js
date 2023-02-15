const express = require('express');
const { Op } = require('sequelize');
const { Equipe, Coach, db, Jouer, Categorie } = require('../db_modules/dbModel');
const router = express();

router.get('/', async function(req, res, next) {
    try {
        await db.authenticate();
        const equipe = await Equipe.findOne({
            where : {
                RefEquipe : +req.query.id
            }, 
            include : {
                model : Coach
            }
        })
    
        if(equipe) {
            const response = {
                Status  : 'OK', 
                Body : JSON.parse(JSON.stringify(equipe, null, 4))
            }
    
            res.json(JSON.stringify(response));
        } else {
            throw new Error("Equip not found!")
        }
    } catch (error) {
        next(new Error(error.message));
    }
})


router.post('/create', async function(req, res, next){
    try {
        await db.authenticate();
        if(req.body.Contact && req.body.NomEquipe) {
            if(req.body.NomCoach && req.body.CINCoach) {
                const equipe = await Equipe.create({
                    NomEquipe : req.body.NomEquipe, 
                    Origine : req.body.Origine,
                    Contact : req.body.Contact, 
                })

                const RefEquipeObject = await Equipe.findOne({
                    order : [['RefEquipe','DESC']]
                }); 
                const coach = await Coach.create({
                    NomCoach : req.body.NomCoach, 
                    CINCoach : req.body.CINCoach, 
                    ContactCoach : req.body.ContactCoach,
                    EquipeRefEquipe : RefEquipeObject.RefEquipe
                })

                const Equiperesponse = await Equipe.findOne({
                    where : {
                        RefEquipe : RefEquipeObject.RefEquipe
                    }, 
                    include : {
                        model : Coach
                    }
                }) ; 

                const response = {
                    Status : 'OK', 
                    body : JSON.stringify(Equiperesponse, null, 4)
                }
            
                res.json(JSON.stringify(response));


            } else throw new Error('Mandatory parameter should be provided');
        } else throw new Error('Mandatory parameter should be provided');
        
    } catch (error) {
        next(new Error(error.message))
    }
})


router.get('/allTeams', async function(req, res, next) {
    try {
        const EquipeListe = await Equipe.findAll({ 
            include : {
                model : Coach, 
                attributes : ['NomCoach','idCoach','ContactCoach']
            }
        }) ; 

        const response = {
            Status : 'OK', 
            Body : JSON.parse(JSON.stringify(EquipeListe, null, 4)) 
        }

        res.json(response)
    } catch (error) {
        next(new Error(error.message))
    }
})



router.get('/allPlayersPerCategorie/:categorie', async function(req, res, next) {
    if(req.query.RefEquipe) {
        try {
            const allPlayersInThisCategorie = await Jouer.findAll({
                include : [
                    {
                        model : Categorie , 
                        where : {
                            Label : {[Op.like] : req.params.categorie}
                        }
                    } 
                ] , 
                where : {
                    EQUIPERefEquipe : +req.query.RefEquipe
                } , 
                attributes : ['NomJoueur','NumJoueur', 'PrenomJoueur','IDJoueur','EQUIPERefEquipe' ]
            })
    
            if(allPlayersInThisCategorie.length) {
                const response = {
                    'Status' : 'OK', 
                    'Body' : JSON.parse(JSON.parse(JSON.stringify(allPlayersInThisCategorie , null , 4)))
                }
    
                res.json(response);
            } else {
                const response = {
                    Status : 'OK',
                    Body : []
                }
            }
        } catch (error) {
            next(new Error(error.message))
        }
    } else {
        throw new Error('RefEquipe must be provided in sueryString!')
    }
})


module.exports = router;
