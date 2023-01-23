<script setup>
import addForm from "@/components/Joueur/addJoueurForm.vue"
import List from "@/components/Joueur/JoueurList.vue"


let show = ()=>{
    $(".ui.modal").modal("show")
}

let modifier = (id)=>{
    console.log("parent: " + id)
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
    
    
    <button class="ui button green" @click="show"><i class="add icon"></i></button>
            <addForm/>
            <List @modifier ="modifier"/>




</template>