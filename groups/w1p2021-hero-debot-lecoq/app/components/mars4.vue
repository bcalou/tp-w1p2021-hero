<template>
  <div class="game">
    <div class="game-template">
      <div class="element">
        <h2>{{message}}</h2>
      <img src="/assets/images/fademen.svg" class="fadeMen"/>
      </div>
    </div>
    <img src="/assets/images/volant.png" class="volant"/>
    <router-link class="button-page" to="/terre8">Continuer</router-link>
  </div>
</template>

<style lang="scss">
    .fadeMen{
        position: absolute;
        top: 35%;
        right: 10%;
        transform: rotate(-88deg);
    }
</style>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'L Homme est resté coller a la vitre  '
    };
  },
};
</script>