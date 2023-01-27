<script setup>

import Notification from "../components/Notification.vue";
import addJoueurForm from "@/components/Joueur/addJoueurForm.vue"
import axios from "axios"

import { ref } from 'vue';

axios.defaults.baseURL = "http://localhost:5000"
//global
let showForm = ()=>{
    $(".ui.modal.add").modal("show")
}

let messageNtf = ref({
    success:true,
    message:""
})

let addPlayer = (player,message)=>{

    messageNtf.value = message
    if(message.success){
            console.log(player)
            axios.post("/api.joueur/create",player).then(response=>{
                console.log(response)
                list.value = [player,...list.value]
            })
        

    }

    $(".ui.modal.notification").modal("show")



}

let list = ref([
{
        "NomJoueur":"Marco",
        "PrenomJoueur":"klark",
        "DateNaissance":new Date(),
        "Equipe":"ASCUT",
        NumeroJoueur: 12,
        id:45
    },{
        "NomJoueur":"Marco",
        "PrenomJoueur":"klark",
        "DateNaissance":new Date(),
        "Equipe":"ASCUT",
        NumeroJoueur: 12,
        id:1
    }
])




</script>

<template>

    <div class="ui header blue">Liste des joueurs</div>
    <!-- <div class="ui form" align="center">
        <div class="field inline">
            <label for="search"><i class="search icon"></i></label>
            <input type="text" >
        </div>
    </div>
     -->
    
    <button class="ui button green" @click="showForm"><i class="add icon"></i></button>
        <!-- list -->
        <div class="ui list divided">
        <div class="item ui grid" >
            <div class="seven column row">
                <div class="column ui header tiny">Nom</div>
                <div class="column ui header tiny">Prénom(s)</div>
                <div class="column ui header tiny">Date de naissance</div>
                <div class="column ui header tiny">Equipe</div>
                <div class="column ui header tiny">Numero </div>
                <div class="column ui header tiny"></div>
                <div class="column ui header tiny"></div>
            </div>
            <div class="seven column row" v-for="j in list">
                <div class="column">{{ j.NomJoueur }}</div>
                <div class="column">{{ j.PrenomJoueur }}</div>
                <div class="column">{{ j.DateNaissance}}</div>
                <div class="column">{{ j.Equipe }}</div>
                <div class="column">{{ j.NumeroJoueur }}</div>
                <div class="column"><i class="trash red icon"></i></div>
                <div class="column" @click="editJoueur(j.id)"><i class="edit icon blue"></i></div>
            </div>
        </div>
    </div>

        <!-- list -->
    <addJoueurForm @add="addPlayer"/>
    <Notification :message="messageNtf" />
    

            




</template>