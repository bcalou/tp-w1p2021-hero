<template>
  <div class="home">
    <h1 class="home__title">{{ message }}</h1>
    <br />
    <router-link class="button" to="/characters">LONGUE VIE</router-link>
    <br />
    <router-link class="button" to="/game">Continue</router-link>
    <br />
    <router-link class="button" to="/page">New game</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'HELL\'SCAPE'
    };
  }
};
</script>
