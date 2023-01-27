<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';


    


   let props =  defineProps({
    player: {
        type: Object, default:{}
    },
    
})




let stat = ref( {
   
    threePts:0,
    twoPts:0,
    onePts:0,
    passeD:0,
    duel:0,
    block:0,
    tirReussi:0,
    tirRate:0,
    perteBall:0

    
})

if(props.player.state == undefined) props.player.state = stat




    let selectedId = ref(0)

    let select = (id)=>{
        console.log(id)
        selectedId.value= id
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
                00:00
            </div>
            <div class="column">
                        <i class="up arrow green icon" v-if="!player.onSet" @click="faireJouer(player)"></i>                
                        <i class="down arrow red icon" @click="mettreAuBanc(player)" v-else></i>                

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

