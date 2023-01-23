<script setup>
import { ref } from 'vue';
import JoueurMatch from '../components/Joueur/JoueurMatch.vue';




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

let getSelectedPlayer = (player)=>{
    selectedPlayer.value = player
}

let faireJouer = (player)=>{
    player.onSet = true 
  }


</script>

<template>

    <div class="ui message blue">Home</div>

    <div class="ui grid">
        <div class="three column row">
            <div class="column">
                <div class="ui header huge">Equipe 1</div>
                Sur terrain:
                <div class="ui list divided red " >
                    
                    <div class="item" v-for="player in Equipe1.filter(e=>e.onSet == true)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer"/>
                    </div>
                
            </div> 
            Sur les bancs:
            <div class="ui list divided green ">
                    
                    <div  v-for="player in Equipe1.filter(e=>e.onSet == false)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer"/>
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
                    <div class="ui tiny header" align="center">1 pt</div>
                    <div class="groupBtn">
                        <button class="ui button tiny"> - </button>
                         <button class="ui button tiny">+</button>
                    </div>
                </div> <div class="ui segment column">
                    <div class="ui tiny header" align="center">2 pts</div>
                    <div class="groupBtn">
                        <button class="ui button tiny"> - </button>
                         <button class="ui button tiny">+</button>
                    </div>
                </div>
                <div class="ui segment column">
                    <div class="ui tiny header" align="center">3 pts</div>
                    <div class="groupBtn">
                        <button class="ui button tiny"> - </button>
                         <button class="ui button tiny">+</button>
                    </div>
                </div>

                </div>

                </div>

            <div class="ui grid" style="margin-bottom:25px">
                <div class="three column row">
                    <div class="ui segment column">
                        <div class="ui header tiny">Passe D</div>
                        <div class="groupBtn">
                        <button class="ui button tiny"> - </button>
                         <button class="ui button tiny">+</button>
                    </div>
                    </div>
                    <div class="ui segment column">
                    <div class="ui tiny header" align="center">Gagner duel</div>
                    <div class="groupBtn">
                        <button class="ui button tiny"> - </button>
                         <button class="ui button tiny">+</button>
                    </div>

                    

                </div>
                <div class="ui segment column">
                    <div class="ui tiny header" align="center">faute</div>
                    <div class="groupBtn">
                        <button class="ui button tiny"> - </button>
                         <button class="ui button tiny">+</button>
                    </div>
                </div>
            </div>

            
        </div>

        <div align="center">
                <div>
                    <div class="ui button" v-if="!selectedPlayer.onSet">faire jouer</div>
                    <div class="ui button" v-else>Mettre au banc</div>
                </div>
            </div>
               
            </div>



            <div class="column">
                <div class="ui header huge">Equipe 2</div>
                Sur terrain:
                <div class="ui list divided red " >
                    
                    <div class="item" v-for="player in Equipe2.filter(e=>e.onSet == true)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer"/>
                    </div>
                
            </div> 
            Sur les bancs:
            <div class="ui list divided green ">
                    
                    <div class="item" v-for="player in Equipe2.filter(e=>e.onSet == false)">

                        <JoueurMatch  :player="player" @set-player="getSelectedPlayer"/>
                    </div>
                
            </div>


            </div>
        </div>
    </div>


</template>

<style>
    .groupBtn{
        display: flex;
        align-items: space-between;
    }

    


</style>