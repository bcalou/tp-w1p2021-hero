<template>
  <div class="game">
    <div class="game-template" id="screen">
      <div class="element">
        <h2>{{message}}</h2>
      </div>
    </div>
    <img src="/assets/images/space-ship.svg" class="space"/>
    <img src="/assets/images/alien-choquer.svg" class="alien"/>
    <img src="/assets/images/volant.png" class="volant"/>
    <router-link class="button-page" to="/page3">Attaquer</router-link>
    <router-link class="button-page_2" to="/page2">Livrer</router-link>
  </div>
</template>

<style lang="scss">
    #screen{
      background-image: url('/assets/images/Background.gif');
      background-size: cover;
      background-repeat: no-repeat;
    }
    .space{
        position: absolute;
        top: 45%;

        transform: scale(2);
          animation: Scale 15s ease-in-out alternate;
          @keyframes Scale {
            0%{
              transform: scale(1.0);
              opacity: 0.5;
            }
            100%{
              transform: scale(2.0);
              opacity: 1;
            }
          }
    }
    .alien{
        position: absolute;
        bottom: 16%;
        left: 17%;
    }
</style>


<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Un vaisseau du gouvernement apparait voulez vous leur livrer ou attaquer '
    };
  },
};
</script>