<template>
<router-link to="/game/20">
  <video autoplay src="../assets/images/video3.mp4">
    <router-link class="btnWin" to="/game/11">CONTINUER
      <img class="arrow" src="../assets/images/Arrow.png" alt="arrow">
    </router-link>
  </video>
</router-link>
  
</template>

<script>

import video from '../data.json';

export default {
  
}
</script>

<style lang="scss" scoped>
  video {
    object-fit: cover;
    width: 100vw;
  }
</style>