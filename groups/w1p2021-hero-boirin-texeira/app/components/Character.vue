<template>
  <div class="big-header">
    <div class="infos">
      <audio id="soundTrack" src="../assets/audio.mp3" autoplay></audio>

      <p>
        5 ans après vous vous réveillez après un terrible coma, le monde a beaucoup changé. Des humains plus vraiment humains errent à la tomber de la nuit.
        Parcourez la ville, trouvez des indices pour vite vous échappez avant la tombée de la nuit, en évitant des loups portant un virus dangereux. Ou restez et voyez ce qui pourrait devenir votre futur.
      </p>
    </div>
    <h1>Choisissez votre personnage</h1>
    <br>
    <div class="choices">
      <router-link to="/game/2" @click.native.prevent="sexe('female')">
        <img src="../assets/femme.png" alt="femme">
      </router-link>
      <router-link to="/game/2" @click.native.prevent="sexe('male')">
        <img src="../assets/homme.png" alt="homme">
      </router-link>
    </div>
  </div>
</template>

<script>
import Sexe from "../sexe.js";
export default {
  methods: {
    sexe(sexe) {
      Sexe.getSexe(sexe);
    }
  }
};
</script>
