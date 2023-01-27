const { Tournoi, Participer, Equipe , Coach, Joueur, Categorie} = require("./dbModel");


(async function () {
    
// const tournoi = await Tournoi.findOne({
//     where: {
//         RefTournoi : 3
//     }, 
//     attributes : ['NomTournoi', 'RefTournoi', 'DateDebutTournoi','DateFinTournoi','LieuTournoi'],
//     include : {
//         model : Equipe,
//         attributes: ["RefEquipe",'NomEquipe'],
//         through : []
//     }
// })

// const equipe = await Equipe.findOne({
//     where : {
//         RefEquipe : 1
//     }, 
//     include : {
//         model : Coach
//     }
// })

const joueur = await Joueur.findOne({
    where : {
        IDJoueur : 1
    } , 
    include : [
        { model : Equipe, attributes : ['NomEquipe']},
        {model : Categorie, attributes : ['Label']}
    ]
})

console.log(JSON.stringify(joueur, null, 4))
})
()