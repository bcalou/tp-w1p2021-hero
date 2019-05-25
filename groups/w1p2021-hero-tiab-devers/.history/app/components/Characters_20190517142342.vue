<template>
  <div class="home">
    <h1 class="home__title">{{ message }}</h1>
    <br />
    <h2 class="home__subtitle">Select Characters</h2>
    <div class="characters">
      <div class="characters__sexe">
        <div class="characters__select">G</div>
        <p>Homme</p>
        <div class="characters__select">D</div>
      </div>
      <div class="characters__sexe">
        <div class="characters__select">G</div>
        <p>Femme</p>
        <div class="characters__select">D</div>
      </div>
    </div>
    <router-link class="button button--back" to="/">Retour</router-link>
</template>

<script>
export default {
  data() {
    return {
      message: 'HELL\'SCAPE'
    };
  },
};
</script>
