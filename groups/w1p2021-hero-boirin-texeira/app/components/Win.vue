<template>
  <div class="big-header winbg">
    <h1 class="win">Tu as gagné !!</h1>
    <audio id="soundTrack" src="../assets/audio.mp3" autoplay></audio>

    <div class="question">
      <p>Voici tes statistiques : &nbsp;</p>
      <br>
      <p v-if="step == 30">Tu as survécu pendant 30 etapes étapes</p>
    </div>
    <a class="button" href="/home">Rejouer</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: localStorage.getItem("step")
    };
  }
};
</script>
