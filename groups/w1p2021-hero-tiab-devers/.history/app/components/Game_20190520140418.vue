<template>
<div>
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
  <ul>
    <li v-for="(action, index) in step.actions" :key="index">
      <router-link :to="action.to.toString()">
        <img v-if="action.arrow === 'left'" src="../assets/img/arrow.png" alt="Red Arrow Pixel Art">
        <span v-if="action.arrow === 'left'">4</span>
        <span v-if="action.arrow === 'top'">1</span>
        <span v-if="action.arrow === 'right'">2</span>
        <span v-if="action.arrow === 'bottom'">3</span>
        {{ action.label }}
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
import game from '../data.json';
console.log(game);

export default {
  computed: {
    step() {
      return game.steps.find(step => {
        return step.id === Number(this.$route.params.id)
      })
    }
  },
  mounted: function() {
    console.log('Is Mounted');
  }
}
</script>
