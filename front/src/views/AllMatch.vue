<template>
    <div class="ui header blue">Les match du tournoi  {{ tournoiUnique.NomTournoi }} </div>

    
    <RouterLink :to="`/championnats`" ><i class="arrow left icon"></i>voir les autres tournoi..</RouterLink> <br><br>        
<div class="ui button green"><i class="add icon"></i></div>

<div class="ui grid allMatch">
    <div class="row">
        <RouterLink :to="`/match/${match.Equipes[0].RefEquipe}/${match.Equipes[1].RefEquipe}/${idTournoi}/${match.idRencontre}`" class="column ui segment" v-for="match in matchs">
            <div class="ui header">
                {{ match.Equipes[0].NomEquipe  }} VS {{ match.Equipes[1].NomEquipe  }} 
            </div>

            Lieu: {{ match.LieuRencontre }} <br>
            date : {{ match.DateRencontre }} <br>
            heure: {{ match.HeureRencontre }}

        </RouterLink>
    </div>
</div>


</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';




// let tournoiName = useRoute().params.nomTournoi
let idTournoi = useRoute().params.id
let tournoiUnique = ref({})

onMounted(()=>{

    axios.get(`/api.tournoi?id=${idTournoi}`).then(response=>{
        tournoiUnique.value = JSON.parse(response.data).Body
    })



})


// on fetch tous les match selon l'id du tournoi
let matchs = [
    
        {
                'idRencontre' : 2,
                'LieuRencontre' : "Fianarantsoa",
                'DateRencontre' : "2022-12-02",
                'HeureRencontre' : "12:00", 
                'CategorieidCategorie' : 1, 
                'TournoiRefTournoi' : 1,
                'Categorie' : {
                    'Label' : "U12"
                }, 
                'Equipes' : [
                    {
                        'RefEquipe': 2 , 
                        'NomEquipe' : "ASCUT"
                    }, 
                    {
                        'RefEquipe': 1 , 
                        'NomEquipe' : "COSPN"
                    }
                ] , 
                'Tournoi' : {
                    'NomTournoi' : 'tournoiName'
                }

               },
               {
                'idRencontre' : 2,
                'LieuRencontre' : "Fianarantsoa",
                'DateRencontre' : "2022-12-02",
                'HeureRencontre' : "12:00", 
                'CategorieidCategorie' : 1, 
                'TournoiRefTournoi' : 1,
                'Categorie' : {
                    'Label' : "U12"
                }, 
                'Equipes' : [
                    {
                        'RefEquipe': 2 , 
                        'NomEquipe' : "ASCUT"
                    }, 
                    {
                        'RefEquipe': 1 , 
                        'NomEquipe' : "COSPN"
                    }
                ] , 
                'Tournoi' : {
                    'NomTournoi' : 'tournoiName'
                }

               }

    
]



</script>

<style>

.ui.grid.allMatch{
    margin-top:50px;
  
    
}

.ui.grid.allMatch .row .column{

    width: 200px;
    cursor: pointer;

    margin-left:50px;
    margin-bottom:20px;


}

a{
    color:inherit;
}
a:hover{
    color:inherit;
}



</style>