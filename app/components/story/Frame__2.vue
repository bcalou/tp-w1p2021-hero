<template>
  <section class="frame frame--2">
    <h1>Frame 2</h1>
    
    <Ship style="z-index: -1"></Ship>

    <router-link class="button" to="/">Go to Home</router-link>
  </section>
</template>

<script>
import Ship from "../characters/ship.vue";

export default {
  components: {
    Ship
  }
};
</script>
