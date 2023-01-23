
<script setup>
import { ref } from 'vue';
import axios from "axios"
    let props = defineProps({
        playerToEdit: Object
    })


    let emit = defineEmits(['save'])

    let register = ()=>{
        // axios.post("http://localhost:5000/test",{
        //     "test":"ok"
        // }).then(response=>console.log(response.data))
        console.log(props.playerToEdit)
        // emit("save",props.playerToEdit)
    }


</script>
<template>

    <div class="ui modal edit">
<i class="close icon red"></i>
        <div class="header" align="center">
            Modifier joueur
        </div>
    <div class="ui form tiny content">
        <div class="field">
            Nom: <input type="text" v-model="playerToEdit.nom">
        </div>
        <div class="field">
            Prénoms : <input type="text" v-model="playerToEdit.nom">
        </div>
        <div class="field">
            Date de naissance : <input type="date" >
        </div>
        <div class="field">
            <select name="equipe" id="equipe">
                <option value="1">Asc</option>
                <option value="1">Asc</option>
                <option value="1">Asc</option>
            </select>
        </div>
<p align="center">
    <button class="ui button tiny" @click="register">Enregistrer modification</button>

</p>
    </div>
    
    
</div>



</template>