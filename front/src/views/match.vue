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

        // console.log(this.$refs)

        // Object.values(this.$refs).forEach(e=>{
        //         e.play
        // })

        axios.get(`/api.rencontre?id=${this.$route.params.idMatch}`).then(response=>console.log(JSON.parse(response.data).Body))

        
    },
    data(){
        return {
            idTournoi: this.$route.params.idTournoi
            , selectedId:0,
            matchEnd:false,
            h:0,
            min:0,
            sec:10,
            playPause:false
            ,
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
    }],
    selectedPlayer : {},
    statPlayerSelected : {}
        }
    },


    methods:{
        
getSelectedPlayer(player){
    
    this.selectedPlayer = player
    this.statPlayerSelected = player.state
},

faireJouer(player){
    this.player.onSet = true 
  },
  
  
  mettreAuBanc(player){
    this.player.onSet = false 
  },


addOnePts(stat){
    stat.onePts ++
  },
  removeOnePts(stat){
stat.onePts --
  },


addTwoPts(stat){
    stat.TwoPts ++
  },
  removeTwoPts(stat){
stat.TwoPts --
  },


  start(){
      this.matchEnd = !this.matchEnd
      console.log(this.matchEnd)
    this.playPause = !this.playPause
  }
    },
    test(){
        alert("okkkk mother fuccker")
    }




}







</script>


<template>

    
    <div class="ui grid">

        <RouterLink :to="`/championnat/${idTournoi}`" ><i class="arrow left icon"></i>voir les autres Matchs..</RouterLink> <br><br>        
<Timer ref="tm" :isPlayed="playPause" :onSet="true" /> <div class="ui button" @click="start">play</div>
        <div class="three column row">
            <div class="column">
                <div class="ui header huge">Equipe 1 </div>
                Sur terrain: 
                <div class="ui list divided green segment" >
                    
                    <div class="item" v-for="player in Equipe1.filter(e=>e.onSet == true)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer" :selectedId="selectedId" :isPlayed="playPause" />
                    </div>
                
            </div> 
            Sur les bancs:
            <div class="ui list divided red segment ">
                    
                    <div  v-for="player in Equipe1.filter(e=>e.onSet == false)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer" :selectedId="selectedId" :isPlayed="playPause"/>
                    </div>
                
            </div>

            </div>
            <div class="column">

                <div class="ui header" align="center" style="height: 60px;">

                    {{ selectedPlayer.name }} <br>
                    {{ selectedPlayer.nb }}
                </div>
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
                        <button class="ui button tiny" @click="removeThreePts"> - </button>
                         <button class="ui button tiny" @click="addThreePts">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.threePts }}</p>
                </div>

                </div>

                

            <!-- <div class="ui grid"> -->
                <div class="three column row">
                   

                    <div class="ui segment column">
                        <div class="ui header tiny">Passe D</div>
                        <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removePasseD"> - </button>
                         <button class="ui button tiny" @click="addPasseD">+</button>
                         
                        </div>
                        <p align="center">{{ statPlayerSelected.passeD }}</p>
                    
                    </div>
                    <div class="ui segment column">
                    <div class="ui tiny header" align="center">Duel</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removeDuel"> - </button>
                         <button class="ui button tiny" @click="addDuel">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.duel }}</p>


                    

                </div>
                <div class="ui segment column">
                    <div class="ui tiny header" align="center">Block realisé</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removeBlock"> - </button>
                         <button class="ui button tiny" @click="addBlock">+</button>
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
                        <button class="ui button tiny" @click="removeTirReussis"> - </button>
                         <button class="ui button tiny" @click="addTirReussis">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.tirReussi }}</p>

                    
                    </div>
                    <div class="ui segment column">
                    <div class="ui tiny header" align="center">Tirs ratés</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removeTirRate"> - </button>
                         <button class="ui button tiny" @click="addTirRate">+</button>
                    </div>
                    <p align="center">{{ statPlayerSelected.tirRate }}</p>


                    

                </div>
                <div class="ui segment column">
                    <div class="ui tiny header" align="center">Perte de ball</div>
                    <div class="groupBtn" v-if="selectedPlayer.name">
                        <button class="ui button tiny" @click="removePerteBall"> - </button>
                         <button class="ui button tiny" @click="addPerteBall">+</button>
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
                Sur terrain:
                <div class="ui list divided green segment " >
                    
                    <div class="item" v-for="player in Equipe2.filter(e=>e.onSet == true)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer" :selectedId="selectedId" :isPlayed="playPause" />
                    </div>
                
            </div> 
            Sur les bancs:
            <div class="ui list divided red segment ">
                    
                    <div class="item" v-for="player in Equipe2.filter(e=>e.onSet == false)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer" :selectedId="selectedId" :isPlayed="playPause" />
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

    


</style>


