<template>
  <div class="win">
    <div class="win__mute" onclick="document.getElementById('music').pause()" ><img src="../assets/images/icons/volume_off.svg"/></div>
    <div class="win__unmute" onclick="document.getElementById('music').play()" ><img src="../assets/images/icons/volume_on.svg"/></div>
    <audio id="music" src="../assets/audios/win.mp3" autoplay loop></audio>
    <h1 v-if="name" class="win__title">Félicitation {{name}},</h1>
    <h1 class="win__title">Vous êtes maintenant un Hunter<br> vous recevrez votre carte prochainement</h1>
    <img class="win__image" src="../assets/images/card.png">
    <router-link to="/" class="win__link">
      <span>Revenir à l'écran d'accueil</span>
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