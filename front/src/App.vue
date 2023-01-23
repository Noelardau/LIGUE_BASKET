<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <div class="ui menu blue">
    <RouterLink to="/" class="item" :class="$route.path == '/' ? 'active' : ''">BFF</RouterLink>
    <RouterLink to="/joueurs" class="item" :class="$route.path == '/joueurs' ? 'active' : ''">Joueurs</RouterLink>
    <RouterLink to="/" class="item">Equipes</RouterLink>
    <RouterLink to="/championnats" class="item" :class="$route.path == '/championnats' ? 'active' : ''">Championnats</RouterLink>
  </div>
<div class="ui main container">

  <RouterView></RouterView>

</div>






</template>

<style >

.router-link-exacte-active{
  color:red;
}


</style>
