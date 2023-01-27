<template>
    <div class="ui modal notification message  tiny" :class="message.success ? 'green' : 'red'">
        
        <div class="content" align="center">
                {{ message.message }}
        </div>
    </div>



</template>

<script setup>
import { ref } from 'vue';

defineProps({
    message: Object
})





</script>