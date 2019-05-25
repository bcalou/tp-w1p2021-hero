<template>
  <div class="mars">
    <div class="game-template">
      <div class="element">
      </div>
    </div>
    <router-link class="button-mars" to="/mars3">Avancez</router-link>
    <router-link class="button-mars-2" to="/mars3">Contourner</router-link>
    <router-link class="button-mars-3" to="/mars3">Contourner</router-link>
  </div>
</template>

<style lang="scss">
    .mars{
        background-image: url('/assets/images/BackgroundArmurerie.svg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100%;

        .button-mars{
            width: 260px;
            height: 40px;
            border: 1px solid red;
            position: absolute;
            top: 30em;
            left: 5em;
            opacity: 0;
        }
        .button-mars-2{
            width: 260px;
            height: 20px;
            border: 1px solid red;
            position: absolute;
            top: 27em;
            left: 5em;
            opacity: 0;
        }
        .button-mars-3{
            width: 260px;
            height: 20px;
            border: 1px solid red;
            position: absolute;
            top: 29em;
            left: 5em;
            opacity: 0;
        }
    }
</style>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Armurerie '
    };
  },
};
</script>