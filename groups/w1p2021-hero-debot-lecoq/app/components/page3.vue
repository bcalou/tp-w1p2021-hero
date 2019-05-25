<template>
  <div class="game">
    <div class="game-template">
      <div class="element">
        <h2>{{message}}</h2>
      </div>
    </div>
    <img src="/assets/images/space-ship.svg" class="space"/>
    <img src="/assets/images/fireBall.svg" class="fireBall"/>
    <img src="/assets/images/fireBall.svg" class="fireBall2"/>
    <img src="/assets/images/fireBall.svg" class="fireBall3"/>
    <img src="/assets/images/volant.png" class="volant"/>
    <router-link class="button-page" to="/Page5">Attaquer</router-link>
    <router-link class="button-page_2" to="/Page4">Fuir</router-link>
  </div>
</template>

<style lang="scss">
    .space{
        position: absolute;
        top: 45%;
        animation: Scale 1s ease-in-out alternate;
    }
    .fireBall2{
        position: absolute;
        bottom: 20%;
        left: 35%;
        transform: scale(2);
        animation: Scale 2s ease-in-out alternate;
    }
    .fireBall3{
        position: absolute;
        bottom: 70%;
        left: 20%;
        transform: scale(2);
        animation: Scale 2s ease-in-out alternate;
    }
    .fireBall{
        position: absolute;
        bottom: 28%;
        left: 51%;

        transform: scale(2);
          animation: Scale 5s ease-in-out alternate;
          @keyframes Scale {
            0%{
              transform: scale(1.0);
              opacity: 0.5;
            }
            100%{
              transform: scale(9.0);
              opacity: 1;
            }
          }
    }
</style>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Le vaisseau vous attaque voules attaquer ou fuir ? '
    };
  },
};
</script>