<template>
  <div class="game">
    <div class="game-template">
      <div class="element">
        <h2>{{message}}</h2>
      </div>
    </div>
    <img src="/assets/images/space-ship.svg" class="space"/>
    <img src="/assets/images/broken.svg" class="broken"/>
    <img src="/assets/images/broken.svg" class="broken1"/>
    <img src="/assets/images/broken.svg" class="broken2"/>
    <img src="/assets/images/volant.png" class="volant"/>
    <router-link class="button-page" to="/loose">GameOver</router-link>
    <router-link class="button-page_2" to="/loose">GameOver</router-link>
  </div>
</template>

<style lang="scss">
    .broken{
        position: absolute;
        top: 0%;
        right: 20%;
    }
    .broken1{
        position: absolute;
        top: 45%;
        right: 0%;
        transform: rotate(180deg);
    }
    .broken2{
        position: absolute;
        top: 30%;
        left: 0%;
        transform: rotate(45deg);
    }
</style>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'L ennemi vous a eu  '
    };
  },
};
</script>