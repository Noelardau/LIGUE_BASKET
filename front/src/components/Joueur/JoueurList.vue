<template>
    <div class="ui list divided">
        <div class="item ui grid" v-for="j in list">
            <div class="six column row">
                <div class="column">{{ j.nom }}</div>
                <div class="column">{{ j.prenom }}</div>
                <div class="column">{{ j.dateNaissance}}</div>
                <div class="column">{{ j.equipe }}</div>
                <div class="column"><i class="trash red icon"></i></div>
                <div class="column" @click="edit(j.id)"><i class="edit icon blue"></i></div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

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

let emit = defineEmits(['modifier'])

let edit = (id)=>{
    console.log(id)
    emit("modifier",id)
}

</script>