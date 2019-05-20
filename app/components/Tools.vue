<template>
  <div class="tools">
    <h1>Outils</h1>
    
    <!-- <router-link class="button" to="/game/1"></router-link> -->
    <p>Nombre d'audio {{ count }}</p>
    <p>Nombre de loupe</p>
  </div>
</template>

<style scoped>
  .tools {
    border : solid yellow 4px;
    color: black;
    background-color: yellow;

    position: absolute;
    bottom: 60px;
    left : 60px;

  }

  h1 {
    color: blue;
    text-align: center;
  }
</style>


<script>
import audioCount from '../services/audioCount';

export default {
  data() {
    return {
      count : audioCount.value()
    }
  }
};
</script>
