<template>
  <div class="big-header">
    <h1>ESCAPE TO THE OCEAN!</h1>
    <h2>{{ message }}</h2>
    <br />
    <router-link class="button" to="/characters">Start</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '5 years trapped in a fish tank, away from your family, makes you want to try everything to escape right ? Will you be able to make your fish escape and find his fish bank back ?'
    };
  }
};
</script>
