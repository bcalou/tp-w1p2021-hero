<template>
  <div class="home">
    <h1 class="home__title">{{ message }}</h1>
    <br />
    <router-link class="button" to="/">Retour</router-link>
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
