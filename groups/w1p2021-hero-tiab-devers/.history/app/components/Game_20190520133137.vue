<template>
<div>
  <h1>{{ step.title }}</h1>

  <ul>
    <li v-for="(action, index) in step.actions" :key="index">
      <router-link :to="action.to.toString()">
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
