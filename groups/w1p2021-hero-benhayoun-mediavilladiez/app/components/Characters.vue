<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
  
    <br />
    <router-link class="button" to="/game/1">Choose your fish</router-link>
  </div>
</template>

<style>

</style>

<script>
export default {
  data() {
    return {
      message: 'Good luck'
    };
  }
};
</script>