<template>
  <div class="big-header">
     <h1 class="win">Bravo ! Affaire résolue.<br> Le tueur peut croupir en prison.
    </h1>
    <img class="handcuffs" src="../assets/images/menottes-win.png">
    <br />
    <router-link class="button" to="/home">Retour à l'accueil</router-link>

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
.handcuffs {
  padding: 30px;
}
.win {
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
}
</style>


<script>
//import data from '../assets/data.json';
import audioCount from '../services/audioCount';

export default {
    
};
</script>