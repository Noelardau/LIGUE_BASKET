<script setup>

import List from "@/components/Joueur/JoueurCrud.vue"
import addJoueurForm from "@/components/Joueur/addJoueurForm.vue"
import editJoueurForm from "@/components/Joueur/editJoueurForm.vue"
import { ref } from 'vue';


//global
let showForm = ()=>{
    $(".ui.modal.add").modal("show")
}

let list = ref([
{
        "nom":"Marco",
        "prenom":"klark",
        "dateNaissance":new Date(),
        "equipe":"ASCUT",
        id:45
    },{
        "nom":"Marco",
        "prenom":"klark",
        "dateNaissance":new Date(),
        "equipe":"ASCUT",
        id:1
    },{
        "nom":"Marco",
        "prenom":"klark",
        "dateNaissance":new Date(),
        "equipe":"ASCUT",
        id:47
    },{
        "nom":"Marco",
        "prenom":"klark",
        "dateNaissance":new Date(),
        "equipe":"ASCUT",
        id:5
    },{
        "nom":"Marco",
        "prenom":"klark",
        "dateNaissance":new Date(),
        "equipe":"ASCUT",
        id:13
    }
])

let joueurToEdit = ref({nom:"",dateNaissance:""})
let editJoueur = (id)=>{

    joueurToEdit.value = list.value.filter(e=> e.id == id)[0]
    console.log(joueurToEdit.value)
    
    $(".ui.modal.edit").modal("show")

    
}

let saveChange = (player)=>{
    console.log(player)
    

    
}



</script>

<template>

    <div class="ui header blue">Liste des joueurs</div>
    <div class="ui form" align="center">
        <div class="field inline">
            <label for="search"><i class="search icon"></i></label>
            <input type="text" >
        </div>
    </div>
    
    
    <button class="ui button green" @click="showForm"><i class="add icon"></i></button>
        <!-- list -->
        <div class="ui list divided">
        <div class="item ui grid" v-for="j in list">
            <div class="six column row">
                <div class="column">{{ j.nom }}</div>
                <div class="column">{{ j.prenom }}</div>
                <div class="column">{{ j.dateNaissance}}</div>
                <div class="column">{{ j.equipe }}</div>
                <div class="column"><i class="trash red icon"></i></div>
                <div class="column" @click="editJoueur(j.id)"><i class="edit icon blue"></i></div>
            </div>
        </div>
    </div>

        <!-- list -->
    <addJoueurForm />
    <editJoueurForm :playerToEdit="joueurToEdit" @save="saveChange"/>

            




</template>