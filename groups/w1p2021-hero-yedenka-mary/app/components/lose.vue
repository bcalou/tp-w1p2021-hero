<template>
  <div class="big-header big-header--losewin">
    <h1 class="title--lose">Vous avez perdu !</h1>
    <img class="background" src="../assets/lose.jpg">
    <audio src="../assets/lose.mp3" autoplay loop></audio>
    <router-link class="button button--losewin" to="/">Recommencer</router-link>
  </div>
</template>

<style>

</style>

<script>
export default {
    
};
</script>
