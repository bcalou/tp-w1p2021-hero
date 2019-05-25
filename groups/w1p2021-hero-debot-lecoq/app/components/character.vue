<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <img src="/assets/images/Perso-1.svg" class="Perso-1"/>
    <img src="/assets/images/Perso-2.svg" class="Perso-2"/>
    <div class="buttons">
      <router-link class="button" to="/intro2">Melvin</router-link>
      <router-link class="button" to="/intro2">Adrien</router-link>
    </div>

  </div>
</template>

<style lang="scss">
    .Perso-1{
        position: absolute;
        top: 40%;
        left: 35%;
    }
    .Perso-2{
        position: absolute;
        top: 40%;
        right:35%;
    }
</style>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Choisissez votre personnage'
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>