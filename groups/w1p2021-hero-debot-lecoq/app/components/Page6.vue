<template>
  <div class="game">
    <div class="game-template">
      <div class="element">
        <h2>{{message}}</h2>
      <img src="/assets/images/darkLord.svg" class="lord-commander"/>
      </div>
    </div>
    <img src="/assets/images/volant.png" class="volant"/>
    <router-link class="button-page" to="/page7">Donner</router-link>
    <router-link class="button-page_2" to="/loose">Refuser</router-link>
  </div>
</template>

<style lang="scss">
    .lord-commander{
        position: absolute;
        bottom: 20%;
        animation: ligth 3s infinite;
        @keyframes light {
            0%{
                opacity: 0.5;
            }
            100%{
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
      message: 'Le lord commander arrive vers vous voulez vous lui donner de la pizza ou non'
    };
  },
};
</script>