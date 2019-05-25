<template>
  <div class="big-header">
    <h1>Objet de départ</h1>
    <img class="background" src="../assets/character.jpg">


      <div class="character--wrapper">
        <div class="outil--wrapper">
          <img src="../assets/boussole.png" class="illustration">
          <router-link class="" to="/game/1"><button class="button  button--character" @click="boussole">Choisir la boussole</button></router-link>
        </div>
        <div class="outil--wrapper">
          <img src="../assets/epee.png" class="illustration">
          <router-link class="" to="/game/1"> <button class="button  button--character" @click="epee">Choisir l'épée</button> </router-link>
        </div>
    </div>

  </div>
</template>

<style>

  .character--wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    width: 70vw;
    height: 400px;
  }

  .outil--wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .illustration {
    height: 200px;
    margin-bottom: 30px;
  }


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
