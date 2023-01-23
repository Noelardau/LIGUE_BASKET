
<script setup>
import EditJoueurForm from "@/components/Joueur/EditJoueurForm.vue"

</script>
<template>

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

<!--     
    <addJoueurForm v-if="!editMode"/>
    <EditJoueurForm :playerToEdit="joueurToEdit" v-else/> -->

</template>