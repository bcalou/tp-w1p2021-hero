<template>
  <div class="game">
    <div class="game-template">
      <div class="element">
        <h2>{{message}}</h2>
      <img src="/assets/images/alien.svg" class="alien"/>
      </div>
    </div>
    <img src="/assets/images/volant.png" class="volant"/>
    <router-link class="button-page" to="/page6">Esquiver</router-link>
    <router-link class="button-page_2" to="/page1">Prendre</router-link>
  </div>
</template>

<style lang="scss">
  .game-template{
    background-image: url('/assets/images/FullSizeRender.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>


<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Un alien apparait devant vous. voulez vous le prendre oui ou de pas calculer ?'
    };
  },
};
</script>
