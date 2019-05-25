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
    handleClick() {
      countService.increment();
    }
  }
};
</script>
