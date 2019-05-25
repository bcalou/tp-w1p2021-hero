<template>
  <div class="big-header">
    <img src="../../assets/img/Vault-Logo.png" alt="" srcset="">
    <h1>{{ message }}</h1>
    <img src="../../assets/img/Vault-Boy.png" alt="" srcset="">
    <br />
    <router-link class="button" to="/character">Commencer l'aventure</router-link>
    <audio src="../../assets/audio/Music-Menu.mp3" autoplay loop ref="audio"></audio>
  </div>
</template>

<style lang="scss" scoped>
  @import "Home"
</style>


<script>


export default {
  data() {
    return {
      message: 'VAULT ADVENTURE'
    };
  }
};
</script>
