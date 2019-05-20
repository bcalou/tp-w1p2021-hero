<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/character">Go to Page</router-link>
    <button class="button" @click="handleClick">Click me up</button>
  </div>
</template>

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

