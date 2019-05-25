<template>
  <div class="big-header">
    <h1 class="loose">case n° 18934FD</h1>
    <br />
    <img class="unsolved" src="../assets/images/unsolved.png">
    <!-- <input></input> -->

  <!-- <template v-if="rechargeAudio < 0">
      <h1>Tu peux à nouveau interroger les suspects</h1>
  </template> -->
    <router-link 
      class="button" 
      to="/home">Rejouer</router-link>

    <!-- <router-link 
      class="button" 
      @click="rechargeAudio"
      to="/home">Retour à l'accueil</router-link> -->
    <!-- <router-link 
      class="button" :to="'/game/ + goto'">
      Répondre</router-link> -->
    <div class="music">
      <audio autoplay loop id="player" src="../assets/images/vuejs_projet_sound3.mp3"></audio>
    <div> 
    <button class="button" onclick="document.getElementById('player').play()">Sound on</button> 
    <button class="button" onclick="document.getElementById('player').pause()">Sound off</button> 
      </div>
    </div>
  </div>
</template>

<style scoped>
.loose {
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
}
</style>


<script>
import data from '../assets/data.json';
import Game from '../components/Game.vue';
import audioCount from '../services/audioCount';

export default {
    computed: {
      id() {
        return this.$route.params.id;
      },
      goto() {
        return data[this.id].goto;
      },
      rechargeAudio() {
        // if(audioCount.value() < 0) {
        //  audioCount.value = 10;
        //   //localStorage.getItem('audio') = 10;
        //   //this.data.count = 10
        // }
        //return audioCount.value();
        //return audioCount.value() = 10;
        //return audioCount.value = 10;
        //localStorage.getItem('audio').value = 10;
        //return audioCount.value() = 10;
      }
    
  },
  mounted() {
    //return audioCount.value() = 10
    audioCount.setvalue(10)
  }
}
</script>