<template>
<div>
  <h1>{{ this.step.title }}</h1>

  <ul>
    <li v-for="action in step.actions">
      <router-link :to="action.to.toString()">
        {{ }}
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
      step:this.getStep()
    };
  },
  mounted: function() {
    console.log('Is Mounted');
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
