<template>
  <div class="lose">
    <div class="lose__mute" onclick="document.getElementById('music').pause()" ><img src="../assets/images/icons/volume_off.svg"/></div>
    <div class="lose__unmute" onclick="document.getElementById('music').play()" ><img src="../assets/images/icons/volume_on.svg"/></div>
    <!-- Peut être changer le son mdr -->
    <audio id="music" src="../assets/audios/lose.mp3" autoplay loop></audio>
    <h1 v-if="name" class="win__title">Dommage {{name}},</h1>
    <h1 class="lose__title">Vous avez échoué à l'examen</h1>
    <img class="lose__image" src="../assets/images/take-the-l.jpg">
    <router-link to="/" class="lose__link">
      <span>Retenter de devenir un hunter</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: localStorage.getItem('playerName')
      };
    }
  };
</script>