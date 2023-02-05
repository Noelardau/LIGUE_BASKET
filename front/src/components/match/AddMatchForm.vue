<template>
   <div class="ui modal Match">
    <div class="header">
        <div class="ui header">Nouveau Match</div>
    </div>
    <div class="content">
        <div class="ui grid">
            <div class="two column row">
                <div class="column">
                   <div class="ui form">
                    <div class="field">
                            <label for="LieuRencontre">Lieu de rencontre</label>
                            <input type="text" v-model="LieuRencontre">
                        </div> 
                        <div class="field">
                            <label for="DateRencontre">Date de rencontre</label>
                            <input type="date" v-model="DateRencontre">
                        </div>
                        <div class="field">
                            <label for="Heure">Heure</label>
                            <input type="time" v-model="HeureRencontre">
                        </div>
                        <div class="field">
                            <label for="Categorie">Categorie{{ CategorieIdCategorie }}</label>
                            <select name="Categorie" id="Categorie" v-model="CategorieIdCategorie">
                                <option value="1">U12</option>
                                <option value="2">U12</option>
                                <option value="3">U12</option>
                            </select>
                            
                        </div>


                   </div> 



                </div>
                
                <div class="column">
                    <div class="ui form">

                        <div class="field">
                            <label for="Equipe">EquipeA </label>
                            <input type="text" v-model="EquipeASearch">
                        </div>
                        <div class="field">
                            <label for="Equipe">Joueur surclassé </label>
                            <input type="text">
                            {{ EquipeA.ClassUp }}
                        </div>
                        <div class="field">
                            <label for="Equipe">EquipeB </label>
                            <input type="text" v-model="EquipeBSearch">
                        </div>
                        <div class="field">
                            <label for="Equipe">Joueur surclassé </label>
                            <input type="text">
                            {{ EquipeB.ClassUp }}
                        </div>


                    </div>




                </div>


            </div>

        </div>

    </div>
   </div> 

</template>

<script setup>
import { ref } from 'vue';

    let DateRencontre = ref("")
    let HeureRencontre = ref("")
    let LieuRencontre = ref("")
    let CategorieIdCategorie= ref("")

    let EquipeA = ref({
        RefEquipe:"",
        ClassUp:[]
    })
    let EquipeB = ref({
        RefEquipe:"",
        ClassUp:[]
    })

    let EquipeASearch = ref("")
    let EquipeBSearch = ref("")






</script>