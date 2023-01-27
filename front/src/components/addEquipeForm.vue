<script setup>
import { ref } from 'vue';


let newEquipe = ref({
    NomEquipe:"",
    Origine:"",
    Contact:"",
    Coaches:[

    ]
}) 

let newCoach = ref({
    NomCoach:"",
    CINCoach:"",
    ContactCoach:""
})

let message = ref({
    success:false,
    message:"Veuillez remplir tous les champs et ajouter au moins un coach"
})


let addCoach = ()=>{
    console.log("okkk")
    if(newCoach.value.NomCoach !="" && newCoach.value.CINCoach !="" && newCoach.value.ContactCoach !="" ){
        newEquipe.value.Coaches.push({
            NomCoach: newCoach.value.NomCoach,
            CINCoach: newCoach.value.CINCoach,
            ContactCoach: newCoach.value.ContactCoach
        })

        newCoach.value.NomCoach = ''
        newCoach.value.CINCoach = ''
        newCoach.value.ContactCoach = ''
    }
}

let emit = defineEmits(['addEquipe'])

let addEquipe = ()=>{

    if(newEquipe.value.NomEquipe != "" && newEquipe.value.Origine != "" && newEquipe.value.Contact != "" && newEquipe.value.Coaches.length != 0){

        
        message.value.message = "Equipe enregistrée!!"
        message.value.success = true


        

        emit("addEquipe",{NomEquipe:newEquipe.value.NomEquipe,Origine:newEquipe.value.Origine,Contact:newEquipe.value.Contact,Coaches:newEquipe.value.Coaches},message.value)
    }else{
        emit("addEquipe",{},message.value)

    }

    newEquipe.value.NomEquipe = ""
        newEquipe.value.Origine = ""
        newEquipe.value.Contact = ""
        newEquipe.value.Coaches = []



}




</script>

<template>

<div class="ui modal equipe">
    <i class="close icon"></i>
    <div class="header">
        <div class="ui header">Nouvelle equipe</div>
    </div>
    <div class="content">

        <div class="content ui grid">
            <div class="two column row">
                <div class="column">
                    <div class="ui form">
                        <div class="field">
                            Nom de l'équipe : <input type="text" v-model="newEquipe.NomEquipe">
                    </div>
                    <div class="field">
                        Origine : <input type="text" v-model="newEquipe.Origine">
                    </div>
                    
                    <div class="field">
                        contact : <input type="tel" v-model="newEquipe.Contact">
                    </div>
                    
                    <div class="field" v-if="newEquipe.Coaches.length !=0">
                        Coach: <ul>
                            <li v-for="c in newEquipe.Coaches">{{ c.NomCoach }} </li>
                        </ul>
                    </div>

                    <button class="ui button" @click="addEquipe">Enregistrer equipe</button>
                    
                </div>
            </div>
            
            <div class="column">
                <div class="ui header tiny">Coach(veuillez ajouter au moins un)</div>
                <div class="ui form tiny">
                    <div class=" inline field">
                        <label for="nom">Nom :</label> <input type="text" v-model="newCoach.NomCoach">
                    </div>
                    <div class="inline field">
                        <label for="prenom">CIN :</label> <input type="text" v-model="newCoach.CINCoach">
                    </div>                    
                    <div class="inline field">
                        <label for="contact">Contact :</label> <input type="tel" v-model="newCoach.ContactCoach">
                    </div>
                    <div class="ui button tiny" @click="addCoach">Ajouter coach</div>
                </div>
            </div>
        </div>
        
    </div>



    </div>
</div>


</template>