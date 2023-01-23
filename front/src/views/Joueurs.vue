<script setup>

import Notification from "../components/Notification.vue";
import addJoueurForm from "@/components/Joueur/addJoueurForm.vue"

import { ref } from 'vue';


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


        list.value = [player,...list.value]
        

    }

    $(".ui.modal.notification").modal("show")



}

let list = ref([
{
        "Nom":"Marco",
        "Prenom":"klark",
        "DateNaissance":new Date(),
        "Equipe":"ASCUT",
        Numero: 12,
        id:45
    },{
        "Nom":"Marco",
        "Prenom":"klark",
        "dateNaissance":new Date(),
        "Equipe":"ASCUT",
        Numero: 12,
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
        <div class="item ui grid" v-for="j in list">
            <div class="seven column row">
                <div class="column">{{ j.Nom }}</div>
                <div class="column">{{ j.Prenom }}</div>
                <div class="column">{{ j.DateNaissance}}</div>
                <div class="column">{{ j.Equipe }}</div>
                <div class="column">{{ j.Numero }}</div>
                <div class="column"><i class="trash red icon"></i></div>
                <div class="column" @click="editJoueur(j.id)"><i class="edit icon blue"></i></div>
            </div>
        </div>
    </div>

        <!-- list -->
    <addJoueurForm @add="addPlayer"/>
    <Notification :message="messageNtf" />
    

            




</template>