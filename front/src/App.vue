<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
import { onMounted } from 'vue';
axios.defaults.baseURL = "http://localhost:5000"
onMounted(()=>{
  axios.get("/api.rencontre?id=1").then((response)=>{console.log(response.data)})
})



</script>

<template>
  <div class="ui menu blue fixed">
    <RouterLink to="/" class="item" :class="$route.path == '/' ? 'active' : ''">
      <i class="home icon"></i>
    </RouterLink>
    <RouterLink to="/joueurs" class="item" :class="$route.path == '/joueurs' ? 'active' : ''">Joueurs</RouterLink>
    <RouterLink to="/equipe" class="item" :class="$route.path == '/equipe' ? 'active' : ''">Equipes</RouterLink>
    <RouterLink to="/championnats" class="item" :class="$route.path == '/championnats' || $route.path == `/championnat/${$route.params.id}` ? 'active' : ''">Tournoi</RouterLink>
    <RouterLink to="/test" class="item" :class="$route.path == '/championnats' ? 'active' : ''">Test</RouterLink>
  </div>
<div class="ui main container">

  <RouterView></RouterView>

</div>






</template>

<style >

.ui.main.container{
  margin-top:70px;
}


</style>
