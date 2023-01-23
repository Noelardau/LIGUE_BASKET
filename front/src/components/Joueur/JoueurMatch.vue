<script setup>

    


   let props =  defineProps({
    player: Object
})



    

    let chrono = "00:00"

    let select = (id)=>{
        console.log(id)
        emit('setPlayer',id)
    }

  let emit =   defineEmits(['setPlayer'])

  


</script>

<template>
   
   
     <div @click="select(player)" class="ui grid whole" >
        <div class="three column row "  >
            <div class="column">
                {{ player.name }}
            </div>
            <div class="column">
                

            </div>
            <div class="column">
                00:00
            </div>
        </div>
         
    </div>

</template>

<style>
.whole{
    cursor:pointer;
}

</style>

