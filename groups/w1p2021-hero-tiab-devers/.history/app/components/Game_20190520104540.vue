<template>
<div>
  <h1>{{ step.title }}</h1>

  <ul>
    <li v-for="action in step.actions">
      <router-link :to="action.to.toString()">
        {{ step }}
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
import game from '../data.json';
console.log(game);

export default {
  data: function() {
    return {
      step: game.steps.find(step => {
        return step.getStep()
      })
    }
  },
  mounted: function() {
    console.log('coucou sa marche walah');
  },
  watch: {
    '$route.params.id' (to, from) {
      this.step = this.getStep()
    }
  },
  methods: {
    getStep() {
      this.step = game.steps.find(step => {
        return step.id === parseInt(this.$route.params.id)
    })
  }}
  
}
</script>
