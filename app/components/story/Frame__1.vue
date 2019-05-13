<template>
  <section class="frame frame--1">


    <Planete></Planete>
    <Ship></Ship>

    <router-link style="z-index: 10" class="button" to="/frame__2">Go to Home</router-link>

  </section>
</template>

<script>
import Planete from "../characters/Planete.vue";
import Ship from "../characters/ship.vue";

export default {
  components: {
    Planete,
    Ship
  }
};
</script>
