<template>
  <div class="big-header">
    <!-- <h1>{{ message }}</h1> -->
    <br />
    <img class="background" src="../assets/titre.png">
    <router-link class="button button--start" to="/character">Commencer</router-link>
    <!-- <button class="button" @click="handleClick">Click me up</button> -->
  </div>
</template>

<style>
.button--start {
  position: absolute;
  top: 250px;
}
</style>

<script>
import countService from '../json/countServices';
export default {
  data() {
    return {
      message: 'Hello Hetic'
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>

