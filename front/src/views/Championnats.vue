<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';

import addForm from "@/components/championnat/addChampionnatForm.vue"
import Notification from '../components/Notification.vue';
import axios from "axios"
import { RouterLink } from 'vue-router';




axios.defaults.baseURL = "http://localhost:5000"

var tournois = ref([
    ])
onMounted(()=>{
    console.log("getTournoi")
    axios.get("/api.tournoi/all").then(response=> {
        tournois.value = JSON.parse(response.data).Body.reverse()
        console.log(JSON.parse(response.data))
    
})
 })




let showAddForm = ()=>{
    $(".ui.modal.championnat").modal("show")
}


let messageNtf = ref({

})
let addTournoi = (newTournoi,message)=>{

    console.log(message)
    messageNtf.value = message
    if(message.success){


console.log(newTournoi)
        axios.post("/api.tournoi/create",newTournoi).then(response=>{
            // console.log(response.data)
            // tournois.value = [newTournoi,...tournois.value]
            location.reload()
            // newTournoi.RefTournoi = tournois.value.length
        })
        

    }

    $(".ui.modal.notification").modal("show")

}


</script>

<template>
<div class="ui header blue">Les Tournois  </div>
    <div class="ui grid allChampionnat" >
        <div class="ui row">
            <div class="column" align="center" style="display:flex;align-items: center;" @click="showAddForm">Nouveau tournoi... <i class="add icon large"></i></div>
            <RouterLink  class="column ui segment" :to="`/championnat/${chp.RefTournoi}`" v-for="chp in tournois">
                <div class="ui header">{{ chp.NomTournoi}}</div>
               du <strong>{{ chp.DateDebutTournoi}}</strong> <br> au
                <strong>{{ chp.DateFinTournoi}}</strong> <br>                
                <div class="ui header tiny">{{ chp.LieuTournoi}}</div>                
            </RouterLink>
        </div>
    </div>

    <addForm @addTournoi="addTournoi"/>
    <Notification :message="messageNtf" />
    

    


</template>

<style>
.ui.grid.allChampionnat{
    margin-top:50px;
  
    
}

.ui.grid.allChampionnat .row .column{

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