const { Tournoi, Participer } = require("../db_modules/dbModel");

(async function () {
    const tournoi = await Tournoi.create({
        NomTournoi  : "Manabe 2023",
        DateDebutTournoi : "2023-01-26",
        DateFinTournoi : "2023-04-12",
        LieuTournoi : "Fianarantsoa"
    })
    
    const participer = await Participer.create({
        EQUIPERefEquipe : 1,
        TournoiRefTournoi : 4
    })
})()