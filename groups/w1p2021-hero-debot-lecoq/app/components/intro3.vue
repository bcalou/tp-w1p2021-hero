<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <img src="/assets/images/earth.svg" class="Perso-1"/>
    <img src="/assets/images/moon.svg" class="Perso-2"/>
     <img src="/assets/images/mars.svg" class="perso-3"/>
    <div class="buttons">
      <router-link class="button" to="/terre1">Terre</router-link>
      <router-link class="button" to="/mars1">Mars</router-link>
      <router-link class="button" to="/page">Lune</router-link>
    </div>

  </div>
</template>
<style lang="scss">
    .Perso-1{
        position: absolute;
        height: 100px;
        width: 100px;
        top: 40%;
        left: 35%;
    }
    .Perso-2{
        position: absolute;
        height: 100px;
        width: 100px;
        top: 40%;
        right:35%;
    }
    .perso-3{
        position: absolute;
        height: 100px;
        width: 100px;
        top: 40%;
        right:46%;
    }
</style>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Le choix de la plènete varie en fonctions du gameplay '
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>