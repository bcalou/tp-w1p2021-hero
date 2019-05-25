<template>
  <div class="home">
    <h1 class="home__text">{{ message }}</h1>
    <router-link class="home__link" to="/characters">Jouer</router-link>
    <a href="https://github.com/NatsuDzn/w1p2021-hero-louzoun-cakir" target="_blank">
      <div class="home__link">
        <p>Source du projet</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "Bienvenue sur le jeu"
      };
    }
  };
</script>