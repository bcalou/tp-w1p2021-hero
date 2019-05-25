<template>
  <div class="game">
    <div class="game-template">
      <div class="element">
        <h2>{{message}}</h2>
      </div>
    </div>
    <img src="/assets/images/space-ship.svg" class="space"/>
    <img src="/assets/images/alienDos.svg" class="alienDos"/>
    <img src="/assets/images/volant.png" class="volant"/>
    <router-link class="button-page" to="/win">Win</router-link>
    <router-link class="button-page_2" to="/win">Win</router-link>
  </div>
</template>

<style lang="scss">
    .alienDos{
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
      message: 'l alien vous viens en aide il détruite le vaisseau '
    };
  },
};
</script>