<template>
  <div class="big-header big-header--losewin">
    <h1 class="title--win">Victoire, vous êtes désormais un pirate !</h1>
    <video src="../assets/video.mp4" autoplay muted loop></video>
    <audio src="../assets/victoire.mp3" autoplay loop></audio>
    <router-link class="button" to="/">Recommencer</router-link>
  </div>
</template>

<style>
video {
  position: absolute;
  z-index: -1;
}
</style>

<script>
export default {
    
};
</script>
