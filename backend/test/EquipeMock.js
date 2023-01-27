const { Equipe } = require("../db_modules/dbModel");

(async function () {
    const equipe = await Equipe.create({
        NomEquipe : 'ASCUT',
        Contact : "0327875522",
        Origine : "Tamatave",
    
    });
}) ()