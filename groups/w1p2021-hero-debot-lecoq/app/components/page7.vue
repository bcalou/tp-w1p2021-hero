<template>
  <div class="game">
    <div class="game-template">
      <div class="element">
        <h2>{{message}}</h2>
      <img src="/assets/images/alien.svg"/>
      <img src="/assets/images/Gift.svg" class="gift"/>
      </div>
    </div>
    <img src="/assets/images/volant.png" class="volant"/>
    <router-link class="button-page" to="/win">Accepter</router-link>
    <router-link class="button-page_2" to="/loose">Refuser</router-link>
  </div>
</template>

<style lang="scss">
    .gift{
        position: absolute;
        top: 35%;
        right: 45%;
        animation: gift 8s infinite;

        @keyframes gift {
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
    }
</style>

<script>

import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'il est ravie et vous donne un alien en cadeau '
    };
  },
};
</script>