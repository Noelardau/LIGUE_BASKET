<template>

    <div class="ui modal add">
<i class="close icon red"></i>
        <div class="header" align="center">
            Nouveau Joueur
        </div>
    <div class="ui form tiny content">
        <div class="field">
            Nom: <input type="text" v-model="nomJoueur">
        </div>
        <div class="field">
            Prénoms : <input type="text" v-model="prenomJoueur">
        </div>
        <div class="field">
            Date de naissance : <input type="date" v-model="dateNaissance">
        </div>
        <div class="field">
            <select name="equipe" id="equipe">
                <option value="1">Asc</option>
                <option value="1">Asc</option>
                <option value="1">Asc</option>
            </select>
        </div>
<p align="center">
    <button class="ui button tiny" @click="add" v-if="mode=='add'">Ajouter</button>
    <button class="ui button tiny" @click="add" v-else>modifier</button>

</p>
    </div>
    
    
</div>

</template>

<script setup>
import { ref } from 'vue';
import axios from "axios"

let props = defineProps({
        playerToEdit: Object,
        mode:String
    })


    let nomJoueur = ref("Nom")
    let prenomJoueur = ref("Prenom")
    let dateNaissance = ref(new Date().getUTCDate())

    let add = ()=>{
        axios.post("http://localhost:5000/test",{
            "test":"ok"
        }).then(response=>console.log(response.data))
    }


</script>