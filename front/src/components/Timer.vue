<script>
import { ref } from 'vue';


export default {

    setup(){
        let timer = ()=>{
            console.log("ok")
        }

        let time = ref("0")


        return {
            timer,time
        }

    }


}




</script>
<template>



{{ time }}



</template>