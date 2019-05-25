<template>
  <div class="game">
    <div class="game-template" id="Screen2">
      <div class="element">
        <h2>{{message}}</h2>
      </div>
    </div>
    <img src="/assets/images/space-ship.svg" class="space"/>
    <img src="/assets/images/alien-nerv.svg" class="alien-choquer"/>
    <img src="/assets/images/fireBall.svg" class="fireBall"/>
    <router-link class="button-page" to="/loose">GameOver</router-link>
    <router-link class="button-page_2" to="/loose">GameOver</router-link>
  </div>
</template>

<style lang="scss">
    .space{
        position: absolute;
        top: 45%;
    }
    .alien-choquer{
        position: absolute;
        bottom: 23%;
        left: 47%;
    }
    .fireBall{
        position: absolute;
        bottom: 28%;
        left: 51%;

        transform: scale(2);
          animation: Scale 20s ease-in-out alternate;
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
      message: 'l alien pensez qui serez votre ami il décida de ce retourner contre vous et detruitre votre vaisseau'
    };
  },
};
</script>