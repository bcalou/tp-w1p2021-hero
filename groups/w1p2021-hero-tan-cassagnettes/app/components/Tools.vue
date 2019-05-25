<template>
  <div class="tools">
    <!-- <h1>Outils</h1> -->
    
    <!-- <router-link class="button" to="/game/1"></router-link> -->
    <span class="audioNumber">{{ count }}x </span><span><img class="picto-audio" src="../assets/images/picto-audio.png" alt="audio_picto"></span>
    <!-- <p>Nombre de loupe</p> -->
  </div>
</template>

<style scoped>
  .tools {
    /* border : solid yellow 4px; */
    color: white;
    

    position: absolute;
    bottom: 60px;
    left : 60px;

  }

  h1 {
    color: blue;
    text-align: center;
  }
  .audioNumber {
    font-size: 24px;
  }
  .picto-audio {
    position: absolute;
    left: 100px;
    bottom: -7px;
  }
</style>


<script>
import audioCount from '../services/audioCount';

export default {
  computed: {
    count() {
      return audioCount.data.count;
    }
  }
};
</script>
