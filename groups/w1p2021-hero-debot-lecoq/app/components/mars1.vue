<template>
  <div class="game">
    <div class="game-template">
      <div class="element">
        <h2>{{message}}</h2>
      <img src="/assets/images/man-Up.svg" class="man-up"/>
      </div>
    </div>
    <img src="/assets/images/volant.png" class="volant"/>
    <router-link class="button-page" to="/mars4">Avancez</router-link>
    <router-link class="button-page_2" to="/mars2">Armurerie</router-link>
  </div>
</template>

<style lang="scss">
    .man-up{
        animation: scaleMan 16s infinite;
        @keyframes scaleMan {
            0%{
                transform: scale(0);
                opacity: 0;
            }
            100%{
                transform: scale(1);
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
      message: 'Un homme arrive face à vous '
    };
  },
};
</script>