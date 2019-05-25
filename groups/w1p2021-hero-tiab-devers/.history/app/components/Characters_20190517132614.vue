<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
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
