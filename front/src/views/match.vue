<!-- <script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import JoueurMatch from '../components/Joueur/JoueurMatch.vue';


let IdEquipe1 = useRoute().params.idEquipe1
let IdEquipe2 = useRoute().params.idEquipe2
let idTournoi = useRoute().params.idTournoi
let idMatch = useRoute().params.idMatch

axios.defaults.baseURL = "http://localhost:5000"
onMounted(()=>{
  axios.get("/api.rencontre?id=1").then((response)=>{console.log(response.data)})
})

let test = ()=>{
    console.log("okkk")
}
// recuperer les joueurs de chaque equipe par l'id Equipe
// poure chaque joueur ajouter un stat et un timer 
/*







*/

let selectedId = ref(0)

let Equipe1 = [{
        name: "CJ",
        nb:10,
        id:12,
        onSet:false
    },{
        name:"Josh",
        nb:11,
        id:15,
        onSet:false
    }]

    let Equipe2 = [{
        name: "Trad",
        nb:10,
        id:1,
        onSet:false
    },{
        name:"jkdjf",
        nb:11,
        id:100,
        onSet:false
    }]

    let selectedPlayer = ref({})
    let statPlayerSelected = ref({})

let getSelectedPlayer = (player,state)=>{
    selectedPlayer.value = player
    statPlayerSelected.value = state
}

let faireJouer = (player)=>{
    player.onSet = true 
  }
  
  
  let mettreAuBanc = (player)=>{
    player.onSet = false 
  }


  let addOnePts = (stat)=>{
    stat.onePts ++
  }

  


</script> -->

<script>
import JoueurMatch from '../components/Joueur/JoueurMatch.vue';
import Timer from '../components/Timer.vue';
import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000"

export default {
    name: "Match",
    components:{JoueurMatch,Timer},
    mounted(){
// recuperation des données utile venant du backend!!

        axios.get(`/api.rencontre?id=${this.$route.params.idMatch}`).then(response=>console.log(JSON.parse(response.data).Body))

        axios.post("/api.rencontre/create",{
            
        })

        
    },
    data(){
        return {
            idTournoi: this.$route.params.idTournoi
            , selectedId:0,
            h:0,
            min:0,
            sec:10,
            playPause:false
            ,
            scoreEquipe1:0,
            scoreEquipe2:0,
            Equipe1:[{
        name: "CJ",
        nb:10,
        id:12,
        onSet:false
    },{
        name:"Josh",
        nb:11,
        id:15,
        onSet:false
    }],

    Equipe2:  [{
        name: "Trad",
        nb:10,
        id:1,
        onSet:false
    },{
        name:"jkdjf",
        nb:11,
        id:100,
        onSet:false
    },{
        name:"jkdjf",
        nb:12,
        id:100,
        onSet:false
    },{
        name:"jkdjf",
        nb:13,
        id:100,
        onSet:false
    },{
        name:"jkdjf",
        nb:13,
        id:100,
        onSet:false
    },{
        name:"jkdjf",
        nb:14,
        id:100,
        onSet:false
    },{
        name:"jkdjf",
        nb:15,
        id:100,
        onSet:false
    },{
        name:"jkdjf",
        nb:16,
        id:100,
        onSet:false
    },{
        name:"jkdjf",
        nb:17,
        id:100,
        onSet:false
    }],
    selectedPlayer : {},
    statPlayerSelected : {},
    refEquipe:0
    



        }
    },


    methods:{
        
getSelectedPlayer(player,refEquipe){
    console.log(refEquipe)
    this.selectedPlayer = player
    this.idEquipeSelected = refEquipe
    this.statPlayerSelected = player.state
},

faireJouer(player){
    this.player.onSet = true 
  },
  
  
  mettreAuBanc(player){
    this.player.onSet = false 
  },


addOnePts(stat){
    if(this.idEquipeSelected== 1) this.scoreEquipe1 ++
    else this.scoreEquipe2 ++
    stat.onePts ++
  },
  removeOnePts(stat){
    if(this.idEquipeSelected== 1) this.scoreEquipe1 --
    else this.scoreEquipe2 --
    stat.onePts --
  },


addTwoPts(stat){
    if(this.idEquipeSelected== 1) this.scoreEquipe1 +=2
    else this.scoreEquipe2 +=2
    stat.twoPts ++
  },
  removeTwoPts(stat){
    if(this.idEquipeSelected== 1) this.scoreEquipe1 -=2
    else this.scoreEquipe2 -=2
    stat.twoPts --
  },

  addThreePts(stat){
    if(this.idEquipeSelected== 1) this.scoreEquipe1 +=3
    else this.scoreEquipe2 +=3
    stat.threePts ++
  },
  
  removeThreePts(stat){
    if(this.idEquipeSelected== 1) this.scoreEquipe1 -=3
    else this.scoreEquipe2 -=3
    stat.threePts --
  },
  addBlock(stat){
    stat.block ++
  },

  removeBlock(stat){
    stat.block --
  },

  addPasseD(stat){
    stat.passeD ++
  },
  removePasseD(stat){
    stat.passeD --
  },

  removeDuel(stat){
    stat.duel--
  },
  addDuel(stat){
    stat.duel++
  },



  start(){      
    this.playPause = !this.playPause
  }
    },
    test(){
        alert("okkkk mother fucker")
    }




}







</script>


<template>

    
    <div class="ui grid">

        <RouterLink :to="`/championnat/${idTournoi}`" ><i class="arrow left icon"></i>voir les autres Matchs..</RouterLink> <br><br>    
        
        <div class="three column row">
            <div class="column">
                <div class="ui header huge">Equipe 1 </div>
                <div class="ui header huge" align="center">{{ scoreEquipe1 > 9 ? scoreEquipe1 : "0"+scoreEquipe1 }}</div>
                Sur terrain: 
                <div class="ui list divided green segment" >
                    
                    <div class="item" v-for="player in Equipe1.filter(e=>e.onSet == true)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer" :selectedId="selectedId" :isPlayed="playPause" :refEquipe="1"/>
                    </div>
                
            </div> 
            Sur les bancs:
            <div class="ui list divided red segment player">
                    
                    <div  v-for="player in Equipe1.filter(e=>e.onSet == false)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer" :selectedId="selectedId" :isPlayed="playPause" :refEquipe="1"/>
                    </div>
                
            </div>

            </div>
            <div class="column">

                <div class="ui header" align="center" style="height: 60px;">

                    {{ selectedPlayer.name }} <br>
                    {{ selectedPlayer.nb }}
                </div>
                <p align="center">
            
            <Timer ref="tm" :isPlayed="playPause" :onSet="true" /> <div class="ui button" @click="start">play</div>
        </p>    
                <div class="ui grid">
                
                <div class="three column row">
                   
                <div class="ui segment column">
                    <div class="ui tiny header" align="center">1 pts</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removeOnePts(statPlayerSelected)"> - </button>
                         <button class="ui button tiny" @click="addOnePts(statPlayerSelected)">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.onePts }}</p>
                </div>
                <div class="ui segment column">
                    <div class="ui tiny header" align="center">2 pts</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removeTwoPts(statPlayerSelected)" > - </button>
                         <button class="ui button tiny" @click="addTwoPts(statPlayerSelected)">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.twoPts }}</p>
                </div>
                <div class="ui segment column">
                    <div class="ui tiny header" align="center">3 pts</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removeThreePts(statPlayerSelected)"> - </button>
                         <button class="ui button tiny" @click="addThreePts(statPlayerSelected)">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.threePts }}</p>
                </div>

                </div>

                

            <!-- <div class="ui grid"> -->
                <div class="three column row">
                   

                    <div class="ui segment column">
                        <div class="ui header tiny">Passe D</div>
                        <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removePasseD(statPlayerSelected)"> - </button>
                         <button class="ui button tiny" @click="addPasseD(statPlayerSelected)">+</button>
                         
                        </div>
                        <p align="center">{{ statPlayerSelected.passeD }}</p>
                    
                    </div>
                    <div class="ui segment column">
                    <div class="ui tiny header" align="center">Duel</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removeDuel(statPlayerSelected)"> - </button>
                         <button class="ui button tiny" @click="addDuel(statPlayerSelected)">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.duel }}</p>


                    

                </div>
                <div class="ui segment column">
                    <div class="ui tiny header" align="center">Block realisé</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removeBlock(statPlayerSelected)"> - </button>
                         <button class="ui button tiny" @click="addBlock(statPlayerSelected)">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.block}}</p>

                </div>
            </div>

            
        <!-- </div> -->


        <!-- <div class="ui grid" style="margin-bottom:5px"> -->
                <div class="three column row">
                   

                    <div class="ui segment column">
                        <div class="ui header tiny">Tirs réussis</div>
                        <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removeTirReussis(statPlayerSelected)"> - </button>
                         <button class="ui button tiny" @click="addTirReussis(statPlayerSelected)">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.tirReussi }}</p>

                    
                    </div>
                    <div class="ui segment column">
                    <div class="ui tiny header" align="center">Tirs ratés</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removeTirRate(statPlayerSelected)"> - </button>
                         <button class="ui button tiny" @click="addTirRate(statPlayerSelected)">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.tirRate }}</p>


                    

                </div>
                <div class="ui segment column">
                    <div class="ui tiny header" align="center">Perte de ball</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removePerteBall(statPlayerSelected)"> - </button>
                         <button class="ui button tiny" @click="addPerteBall(statPlayerSelected)">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.perteBall }}</p>

                </div>
            </div>

            
        </div>


        <div align="center">
                <div>
                    <div class="ui button" @click="faireJouer(selectedPlayer)" v-if="!selectedPlayer.onSet">faire jouer</div>
                    <div class="ui button" @click="mettreAuBanc(selectedPlayer)" v-else>Mettre au banc</div>
                </div>
            </div>
               
            </div>



            <div class="column">
                <div class="ui header huge">Equipe 2</div>
                <div class="ui header huge" align="center">{{ scoreEquipe2 > 9 ? scoreEquipe2 : "0"+scoreEquipe2  }}</div>

                Sur terrain:
                <div class="ui list divided green segment" >
                    
                    <div class="item" v-for="player in Equipe2.filter(e=>e.onSet == true)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer" :selectedId="selectedId" :isPlayed="playPause" :refEquipe="2"/>
                    </div>
                
            </div> 
            Sur les bancs:
            <div class="ui list divided red segment player ">
                    
                    <div class="item" v-for="player in Equipe2.filter(e=>e.onSet == false)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer" :selectedId="selectedId" :isPlayed="playPause" :refEquipe="2"/>
                    </div>
                
            </div>


            </div>
        </div>
    </div>


</template>

<style>



    .groupBtn{
        display: flex;
        align-items: center;
    }

    .ui.list.divided.player{
        height:350px;
        overflow: auto;
    }

    


</style>


