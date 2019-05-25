<template>
  <div class="game">
    <div class="game__screen"></div>
    <div class="inventory">
      <h1 class="inventory__title">INVENTORY</h1>
    </div>
    <div class="game__arrows game__arrows--left"></div>
    <div class="game__arrows game__arrows--top"></div>
    <div class="game__arrows game__arrows--right"></div>
    <div class="game__arrows game__arrows--bottom"></div>
    <div class="menu">
      <router-link class="button button--menu" to="/">Menu</router-link>
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
