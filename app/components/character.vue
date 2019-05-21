<template>
  <div class="big-header">
    <h1>Choisir un objet</h1>

      <img src="../assets/blue.jpeg" alt="">
      <router-link class="button" to="/game/1"><button class="button" @click="boussole">Choisir</button></router-link>
      <img src="../assets/blue.jpeg" alt="">
      <router-link class="button" to="/game/1"> <button class="button" @click="epee">Choisir</button> </router-link>

  </div>
</template>

<style>

</style>



<script>
import countService from '../json/countServices.js';
import saveBoussole from '../json/saveBoussole.js';
import saveEpee from '../json/saveEpee.js';

export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    boussole() {
      saveBoussole.save();
    },
    epee() {
      saveEpee.save();
    }
  }
};



</script>
