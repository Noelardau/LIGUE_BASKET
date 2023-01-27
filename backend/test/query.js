const body =  {
    RefTournoi : 1,
    NomTournoi : 'Manabe 2023', 
    DateDebutTournoi : "2023-01-26",
    DateFinTournoi : "2023-04-12",
    LieuTournoi : "Fianarantsoa"
}

fetch('localhost:3000/api.tournoi/create',{
    method : 'POST',
    headers : {
        'Content-type': 'application/json'
    }, 
    body : JSON.stringify(body)
})
.then(response => response.json())
.then(data => console.log(data))