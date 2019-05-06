<template>
  <div class="big__header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/bonjour">Go to bonjour</router-link>
  </div>
</template>

<script>
export default {
    data() {
    return {
      message: '2'
    };
  }
};
</script>
