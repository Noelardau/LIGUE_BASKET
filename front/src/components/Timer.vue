<script>
import { onMounted, onUpdated, ref, watch, watchEffect } from 'vue';


export default {
    props:{isPlayed:Boolean,onSet:Boolean,h:{
        type:Number,
        default:0
    },min:{
        type:Number,
        default:0
    },sec:{
        type:Number,
        default:0
    },tempsJoue:String},
    setup(props,context){
        let timer = ()=>{
            console.log("ok")
        }
let hour = props.h

let time = ref({
    h:props.h,
    min:props.min,
    sec:props.sec
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

        
        // console.log("temps joue" + props.tempsJoue.tempsJoue)
        context.emit("getTime",timeVue.value)
        
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
            timer,timeVue,play,pause,time,hour
        }
    }

}






</script>
<template>



<div>
    
    {{ timeVue }} 
     
     
    
</div>



</template>