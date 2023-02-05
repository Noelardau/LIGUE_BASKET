<script setup>
import { computed } from '@vue/reactivity';
import { onUpdated, ref, watchEffect, } from 'vue';
import Timer from "@/components/Timer.vue"


    


   let props =  defineProps({
    player: {
        type: Object, default:{}
    },
    testUpdate:{
        type:String
    },isPlayed:{
        type: Boolean, default:false
    }
})

// timer






// timer



let stat = ref( {
   
    threePts:0,
    twoPts:0,
    onePts:0,
    passeD:0,
    duel:0,
    block:0,
    tirReussi:0,
    tirRate:0,
    perteBall:0,
    tempsJoue:"00:00:00"


    
})



if(props.player.state == undefined) props.player.state = stat




    let selectedId = ref(0)

    let select = (player)=>{
    
        selectedId.value= player
        emit('setPlayer',props.player)
    }


  let emit =   defineEmits(['setPlayer'])

  let faireJouer = (player)=>{
    props.player.onSet = true 
  }
  
  
  let mettreAuBanc = (player)=>{
    props.player.onSet = false 
  }



</script>

<template>
   
   
     <div @click="select(player)" class="ui grid whole" >
        <div class="three column row "  >
            <div class="column" @click="ge">
               <p :class="player.id == selectedId ? 'select' : ''"> {{ player.name }}</p>
            </div>
            <div class="column">
                <Timer :onSet="props.player.onSet" :isPlayed="isPlayed" :tempsJoue = "stat.tempsJoue"/>
                 
            </div>
            <div class="column">
                <div class="ui button tiny" @click="faireJouer(player)" align="center" v-if="!player.onSet" > 
                    
                    <i class="up arrow green icon" ></i>
                </div>
                
                <div class="ui button tiny" align="center" @click="mettreAuBanc(player)" v-else>
                    <i class="down arrow red icon" ></i>                
                </div>
                    
            </div>
        </div>
         
    </div>

</template>

<style>
.whole{
    cursor:pointer;
}

.select{
    color: blue;
}

</style>

