<script>
import { onMounted, onUpdated, ref, watch, watchEffect } from 'vue';


export default {
    props:{isPlayed:Boolean,onSet:Boolean},
    setup(props){
        let timer = ()=>{
            console.log("ok")
        }


let time = ref({
    h:0,
    min:0,
    sec:0
})
        

        let timeOn = ref("")
function play(){

     timeOn.value = setInterval(()=>{
        time.value.sec++
        if(time.value.sec>59){
            time.value.sec = 0
            time.value.min++

            if(time.value.min>59){
                time.value.min = 0
            time.value.h++
            }

        }

        timeVue.value = `${time.value.h >= 10 ? time.value.h : "0" + time.value.h }:${time.value.min >= 10 ? time.value.min: "0" + time.value.min}:${time.value.sec >= 10 ? time.value.sec: "0" + time.value.sec }`

        
    },1000)


}

let pause = ()=>{
    clearInterval(timeOn.value)
}


        // let time = ref({
        //     h:time.value.h,
        //     min:time.value.min,
        //     sec:time.value.sec
        // })

        let timeVue = ref(`${time.value.h >= 10 ? time.value.h : "0" + time.value.h }:${time.value.min >= 10 ? time.value.min: "0" + time.value.min}:${time.value.sec >= 10 ? time.value.sec: "0" + time.value.sec }`)

        
        
        watchEffect(()=>{
                    
                    if(props.isPlayed){
                       if(props.onSet) play()
                    }else{
                        pause()
                        
                        
                    }
                })
        return {
            timer,timeVue,play,pause,time
        }
    }

}






</script>
<template>



<div>
    {{ timeVue }} 
    
</div>



</template>