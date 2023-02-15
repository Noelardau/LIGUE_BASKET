<template>
   
   <div class="ui modal Match">
        <div class="header">
            <div class="ui header">Nouveau Match</div>
        </div>
        <div class="content">
            <div class="ui form">
                    <div class="field">
                            <label for="LieuRencontre">Lieu de rencontre</label>
                            <input type="text" v-model="newRencontre.LieuRencontre">
                        </div> 
                        <div class="field">
                            <label for="DateRencontre">Date de rencontre</label>
                            <input type="date" v-model="newRencontre.DateRencontre">
                        </div>
                        <div class="field">
                            <label for="Heure">Heure</label>
                            <input type="time" v-model="newRencontre.HeureRencontre">
                        </div>
                        <div class="field">
                            <label for="Categorie">Categorie</label>
                            <select v-model="newRencontre.CategorieIdCategorie">
                                <option value="1">U12</option>
                                <option value="2">U12</option>
                                <option value="3">U12</option>
                            </select>
                            
                        </div>
                        <div class="field">
                            <label for="Categorie">Equipe A</label>
                            <select  v-model="newRencontre.EquipeA.RefEquipe">
                                <option v-for="equipe in listEquipe" :value="equipe.RefEquipe">{{ equipe.NomEquipe }}</option>
                            </select>
                            
                        </div>
                        <div class="field">
                            <label for="Categorie">Equipe B</label>
                            <select name="Categorie" id="Categorie" v-model="newRencontre.EquipeB.RefEquipe">
                                <option v-for="equipe in listEquipe" :value="equipe.RefEquipe">{{ equipe.NomEquipe }}</option>
                              
                            </select>
                            
                        </div>

                        <div class="ui button green" @click="classUp1"><i class="right arrow icon"></i></div>


                   </div> 

        </div>
   </div> 

   <div class="ui modal classUp1">
        <div class="header">
            <div class="ui header">ClassUp de l'equipe 1</div>

            Joueur selectionné: 
        </div>
        <div class="content">
            <div class="ui list">
                <div class="item" v-for="jr in joueurToClassUp1" >{{ jr.NomJouer  }} <div class="ui button tiny">add</div></div>
            </div>

            <div class="ui button green" @click="general"><i class="left arrow icon"></i></div>
            <div class="ui button green" @click="classUp2"><i class="right arrow icon"></i></div>



        </div>


   </div>
   <div class="ui modal classUp2">
        <div class="header">
            <div class="ui header">ClassUp de l'equipe 2</div>

            Joueur selectionné: 
        </div>
        <div class="content">
            <div class="ui list">
                <div class="item" v-for="jr in joueurToClassUp2" >{{ jr.NomJouer  }} <div class="ui button tiny">add</div></div>
            </div>
            </div>

            <div class="ui button green" @click="classUp1"><i class="left arrow icon"></i></div>
            <div class="ui button green">Enregistrer Match</div>



        </div>


   

</template>

<script setup>
import { ref } from 'vue';
  

    let listEquipe = ref([
    {
            NomEquipe:"ASCUT",
            RefEquipe:1
        },
        {
            NomEquipe:"COSPN",
            RefEquipe:2
        },{
            NomEquipe:"MEGA",
            RefEquipe:3
        },
    ])


    let joueurToClassUp1 = ref([
    {
            IdJoueur:1,
            NomJouer:"dfkjdf"

        }, {
            IdJoueur:2,
            NomJouer:"dfkjdf"

        }, {
            IdJoueur:3,
            NomJouer:"dfkjdf"

        }
    ])
    
    
    let joueurToClassUp2 = ref([
        {
            IdJoueur:1,
            NomJouer:"James"

        }, {
            IdJoueur:2,
            NomJouer:"tra"

        }, {
            IdJoueur:3,
            NomJouer:"yto"

        }
    ])



    let newRencontre = ref({
        
    DateRencontre:"",
    HeureRencontre :"",
    LieuRencontre:"",
    CategorieIdCategorie:"",
    EquipeA :{
        RefEquipe:"",
        ClassUp:[]
    },
    EquipeB :{
        RefEquipe:"",
        ClassUp:[]
    }
    })







    let classUp1 = ()=>{
        console.log(newRencontre.value)
        $(".ui.modal.classUp1").modal("show")
    }

    let classUp2 = ()=>{
        console.log("checked 111")
        $(".ui.modal.classUp2").modal("show")
    }

    
    let general = ()=>{
        console.log("checked 111")
        $(".ui.modal.Match").modal("show")
    }





</script>

<style>
    .ui.modal.classUp1 .content .ui.list, .ui.modal.classUp2 .content .ui.list{
        height: 400px;
        
        overflow: auto;
    }

</style>