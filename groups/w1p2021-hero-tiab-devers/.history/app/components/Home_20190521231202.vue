<template>
  <div class="home">
    <h1 class="home__title"></h1>
    <br />
    <router-link class="button" to="/characters">Play</router-link>
    <br />
    <!-- <router-link class="button" to="/test">Continue</router-link>
    <br /> -->
    <router-link class="button" to="/game/1">New game</router-link>
    <br />
    <audio src="../assets/sounds/home-sound.mp3" preload="auto"  loop controls></audio>
    <div @click="mute" class="sounds">
      <img class="sound sound--on" src="../assets/img/sound-on.png" alt="Logo Sound On">
      <img class="sound sound--off is-hidden" src="../assets/img/sound-off.png" alt="Logo Sound On">
    </div>
  </div>
</template>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
    };
  },
  methods: {
    mute() {
      var soundOn = document.querySelector('.sound--on');
      var soundOff = document.querySelector('.sound--off');

      soundOn.classList.toggle('is-hidden');
      soundOff.classList.toggle('is-hidden');

    }
  }
};
</script>
