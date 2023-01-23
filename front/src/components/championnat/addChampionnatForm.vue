<template>

    <div class="ui modal championnat">
<i class="close icon red"></i>
        <div class="header" align="center">
            Nouveau Tournoi
        </div>
    <div class="ui form tiny content">
        <div class="field">
            Nom: <input type="text" v-model="NomTournoi">
        </div>
        <div class="field">
            date de debut <input type="date" v-model="DateDebutTournoi" >
        </div>
        <div class="field">
            Date de fin : <input type="date" v-model="DateFinTournoi">
        </div>
        <div class="field">
            Lieu : <input type="text" v-model="LieuTournoi">
        </div>
        
<p align="center">
    <button class="ui button tiny" @click="add">Ajouter</button>
 

</p>
    </div>
    
    
</div>

</template>

<script setup>
import { ref } from 'vue';
import axios from "axios"

let NomTournoi = ref("")
let DateDebutTournoi = ref("")
let DateFinTournoi = ref("")
let LieuTournoi = ref("")

let emit = defineEmits(['addTournoi'])

let message = ref({
    success:true,
    message:"Championnat ajouté avec success"
}
)
let add = ()=>{

    if(NomTournoi.value != "" && DateDebutTournoi!= "",DateFinTournoi != "", LieuTournoi != ""){

        emit("addTournoi",{NomTournoi:NomTournoi.value,DateDebutTournoi:DateDebutTournoi.value,DateFinTournoi:DateFinTournoi.value,LieuTournoi:LieuTournoi.value},message.value)
        
    }else{
        message.value.success = false
        message.value.message = "Veuillez remplir tout les champs"
        emit("addTournoi",{},message.value)
    }

    NomTournoi.value = ""
 DateDebutTournoi.value= ""
DateFinTournoi.value = ""
 LieuTournoi.value= ""

}


</script>