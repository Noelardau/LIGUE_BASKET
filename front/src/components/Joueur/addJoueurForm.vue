<template>

    <div class="ui modal add">
<i class="close icon red"></i>
        <div class="header" align="center">
            Nouveau Joueur
        </div>
    <div class="ui form tiny content">
        <div class="field">
            Nom: <input type="text" v-model="NomJoueur">
        </div>
        <div class="field">
            Prénoms : <input type="text" v-model="PrenomJoueur">
        </div>
        <div class="field">
            Date de naissance : <input type="date" v-model="DateNaissance">
        </div>
        <div class="field">
            Equipe
            <select name="equipe" id="equipe">
                <option v-for="eq in equipe" :value="eq.RefEquipe">{{eq.NomEquipe}}</option>
                
            </select>
        </div>
<p align="center">
    <button class="ui button tiny" @click="add">Ajouter</button>
   

</p>
    </div>
    
    
</div>

</template>

<script setup>
import { ref } from 'vue';




    let equipe = [
    {
            RefEquipe: 1,
            NomEquipe:"ASCUT"
        },{
            RefEquipe: 5,
            NomEquipe:"COSPN"
        },{
            RefEquipe: 2,
            NomEquipe:"TEST"
        },
    ]


    let NomJoueur = ref("Nom")
    let PrenomJoueur = ref("Prenom")
    let DateNaissance = ref(new Date().getUTCDate())

    let emit = defineEmits(['add'])
    let message = ref({
    success:true,
    message:"Joueur ajouté avec success"
})

    let add = ()=>{
        
        if(NomJoueur.value != "" && PrenomJoueur.value != "" && DateNaissance.value != ""){

            emit("add",{NomJoueur:NomJoueur.value,PrenomJoueur:PrenomJoueur.value,DateNaissance:DateNaissance.value},message)

        }else{
            message.value.message = "Veuillez remplir tout les champs"
            message.value.success = false

            emit("add",{},message)
        }



    }


</script>