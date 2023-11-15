<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import Nav from './components/Nav.vue';
import Player from './components/Player.vue';

</script>

<template>
  
  <Nav></Nav>
  <Player ></Player>
  <router-view></router-view>

</template>

<style scoped>

</style>
