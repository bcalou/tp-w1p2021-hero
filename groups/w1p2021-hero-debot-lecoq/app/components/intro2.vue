<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <img src="/assets/images/pizza-4.svg" class="Perso-1"/>
    <img src="/assets/images/pizza-5.svg" class="Perso-2"/>
    <div class="buttons">
      <router-link class="button" to="/intro3">Cannibale</router-link>
      <router-link class="button" to="/intro3">Savoyarde</router-link>
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
</style>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Choix de la pizza'
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>