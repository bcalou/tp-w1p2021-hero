<template>
  <div class="characters">
    <h1 class="title">{{ message }}</h1>
    <br />
    <router-link class="button" to="/">Retour</router-link>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hell\'Scape'
    };
  },
};
</script>
