<script setup>

    import {onMounted, ref} from "vue"
    import addForm from "@/components/addEquipeForm.vue"
    import Notification from "@/components/Notification.vue"
    import axios from "axios"

    axios.defaults.baseURL = "http://localhost:5000"


    let AllEquipe = ref([])

    onMounted(()=>{

        axios.get("/api.equipe/allTeams").then(response=>{

            AllEquipe.value = response.data.Body
            console.log(response.data.Body)

        } 
        )


    })



    let showAddForm = ()=>{
    $(".ui.modal.equipe").modal("show")
}

    let messageNtf = ref({

    })

let addEquipe = (equipe,message)=>{
    
    if(message.success){
        
        axios.post("/api.equipe/create",equipe).then(response=>console.log(response))


        messageNtf.value = message
        console.log(equipe)
        AllEquipe.value = [equipe, ...AllEquipe.value]
        $(".ui.modal.notification").modal("show")
    }else{
        messageNtf.value = message

        $(".ui.modal.notification").modal("show")

    }


    

}



    // let AllEquipe = ref([
    //     {refEquipe:1,
    //         NomEquipe:"test",
    //     Origine: "ville",
    //     Contact:"0325022546",
    //     Coaches:[
    //         {
    //             refCoach:1,
    //             NomCoach:"RABE",
    //             CINCoach:"0124*7*7*7*",
               
    //             ContactCoach:"0345456874"
    //         },{
    //             refCoach:5,
    //             NomCoach:"RABE",
    //             CINCoach:"0124*7*7*7*",
    //             ContactCoach:"0345456874"
    //         }
    //     ]
    // }

    // ])




</script>
<template>
    <div class="ui header blue">Les équipes</div>

    <div class="ui button green" @click="showAddForm"><i class="add icon"></i></div>

    <div class="ui list divided">
        <div class="item ui grid" >
            <div class="four column row">
                <div class="column ui header tiny">NomEquipe</div>
                <div class="column ui header tiny">Ville d'origine</div>
                <!-- <div class="column ui header tiny">Contact</div>
                <div class="column ui header tiny">Coach</div> -->
                <div class="column ui header tiny"></div>
                <div class="column ui header tiny"></div>
            </div>
            <div class="four column row" v-for="j in AllEquipe">
                <div class="column">{{ j.NomEquipe }}</div>
                <div class="column">{{ j.Origine }}</div>
                <!-- <div class="column">{{ j.Contact}}</div>
                <div class="column">
                        <ul>
                            <li  v-for="c in j.Coaches">{{ c.NomCoach  }} </li>
                        </ul>
                </div> -->
                
                <div class="column"><i class="trash red icon"></i></div>
                <div class="column"><i class="edit icon blue"></i></div>
            </div>
        </div>
    </div>

    <addForm @addEquipe="addEquipe"/>
    <Notification :message="messageNtf" />


</template>
