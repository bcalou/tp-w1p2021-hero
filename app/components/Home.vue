<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/characters">Choix du perso</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Happy Birthdead '
    };
  }
};

/* import data from '../..'  */
</script>
