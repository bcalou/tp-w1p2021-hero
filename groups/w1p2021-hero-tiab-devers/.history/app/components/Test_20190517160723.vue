<template>
  <div class="game">
    <div class="game__screen"></div>
    <div class="inventory">
      <h1 class="inventory__title">INVENTORY</h1>
    </div>
    <div class="menu">
      <router-link class="button button--back" to="/">Menu</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'HELL\'SCAPE'
    };
  }
};
</script>
