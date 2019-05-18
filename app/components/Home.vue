<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/character">Commencer</router-link>
  </div>
</template>

<script>
import audioCount from '../services/audioCount';

export default {
  data() {
    return {
      message: 'Bienvenue dans Emma !'
    };
  }
};
</script>
