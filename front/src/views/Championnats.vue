<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';

import addForm from "@/components/championnat/addChampionnatForm.vue"
import Notification from '../components/Notification.vue';
import axios from "axios"




var tournois = ref([
{
        refTournoi:1,
        NomTournoi:"test",
        DateDebutTournoi:new Date(),
        DateFinTournoi: new Date(),
        LieuTournoi: "Tananarive"
    },{
        refTournoi:2,
        NomTournoi:"test",
        DateDebutTournoi:new Date(),
        DateFinTournoi: new Date(),
        LieuTournoi: "Tananarive"
    },{
        refTournoi:3,
        NomTournoi:"test",
        DateDebutTournoi:new Date(),
        DateFinTournoi: new Date(),
        LieuTournoi: "Tananarive"
    },
])

let showAddForm = ()=>{
    $(".ui.modal.championnat").modal("show")
}

defineExpose({
  tournois
})

let messageNtf = ref({

})
let addTournoi = (newTournoi,message)=>{

    console.log(message)
    messageNtf.value = message
    if(message.success){

        
        tournois.value = [newTournoi,...tournois.value]
        

    }

    $(".ui.modal.notification").modal("show")

}


</script>

<template>
<div class="ui header">Les championnats </div>
    <div class="ui grid allChampionnat" >
        <div class="ui row">
            <div  class="column ui segment" v-for="chp in tournois">
                <div class="ui header">{{ chp.NomTournoi}}</div>
                {{ chp.DateDebutTournoi}}
                {{ chp.DateFinTournoi}}                
                {{ chp.LieuTournoi}}                
            </div>
            <div class="column" align="center" style="display:flex;align-items: center;" @click="showAddForm"> <i class="add icon large"></i></div>
        </div>
    </div>

    <addForm @addTournoi="addTournoi"/>
    <Notification :message="messageNtf"/>


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


</style>