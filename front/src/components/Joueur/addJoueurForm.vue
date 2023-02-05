<template>

    <div class="ui modal add">
<i class="close icon red"></i>
        <div class="header" align="center">
            Nouveau Joueur
        </div>
        <div class="content">
            
            <div class="ui form tiny  grid">
                <div class="ui row two column">
            <div class="column">

                <div class="field">
                    Nom: <input type="text" v-model="newJoueur.NomJoueur">
                </div>
        <div class="field">
            Prénoms : <input type="text" v-model="newJoueur.PrenomJoueur">
        </div> 
        <div class="field">
            Numero : <input type="number" v-model="newJoueur.NumJoueur">
        </div>
        <div class="field">
            Date de naissance : <input type="date" v-model="newJoueur.DAN">
        </div>
    </div>

    <div class="column">

        <div class="field">
            CIN: <input type="text" v-model="newJoueur.CIN">
        </div>
        <div class="field">
            Equipe {{ newJoueur.EquipeRefEquipe }}
            <select name="equipe" id="equipe" v-model="newJoueur.EquipeRefEquipe">
                <option v-for="eq in props.equipe" :value="eq.RefEquipe">{{eq.NomEquipe}}</option>
                
            </select>
        </div>
        <div class="field">
            Categorie{{ newJoueur.CategorieIdCategorie }}
            <select name="Categorie" id="Categorie" v-model="newJoueur.CategorieIdCategorie">
                <option v-for="cate in categorie" :value="cate.idCategorie">{{cate.Categorie}}</option>
                
            </select>
        </div>
        <p align="center">
            <button class="ui button tiny green" @click="add">Ajouter</button>
        </p>
    </div>
</div>
</div>
</div>
    
    
</div>

</template>

<script setup>
import { ref } from 'vue';


    let props = defineProps({
        equipe: {
            type:Array
        }
    })


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

    let categorie = [{
        idCategorie:1,
        Categorie: "U12"
    },{
        idCategorie:2,
        Categorie:"OPEN"
    }



]


    let newJoueur =  ref({
                        'NomJoueur' : "",
                        'PrenomJoueur' :"",
                        'NumJoueur' : 10,
                        'DAN' : "", 
                        'CIN': "",
                        'EquipeRefEquipe' : '',
                        'CategorieIdCategorie' : "", 
                })

    let emit = defineEmits(['add'])
    let message = ref({
    success:true,
    message:"Joueur ajouté avec success"
})

    let add = ()=>{
        
        
        if(newJoueur.value.NomJoueur != "" && newJoueur.value.PrenomJoueur != "" && newJoueur.value.NumJoueur != "" && newJoueur.value.DAN != "" && newJoueur.value.CIN != ""){

            
            
            console.log(newJoueur)

            emit("add",{NomJoueur:newJoueur.value.NomJoueur,PrenomJoueur:newJoueur.value.PrenomJoueur,DAN:newJoueur.value.DAN,CIN:newJoueur.value.CIN,EquipeRefEquipe:newJoueur.value.EquipeRefEquipe,CategorieIdCategorie:newJoueur.value.CategorieIdCategorie,NumJoueur:newJoueur.value.NumJoueur},message.value)

        }else{
            message.value.message = "Veuillez remplir tout les champs"
            message.value.success = false

            emit("add",{},message.value)
        }



    }


</script>