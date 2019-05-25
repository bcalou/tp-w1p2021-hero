<template>
  <div rel="preload" class="big-header">
    <h1 class="game__title">{{ step.title }}</h1>
    <ul>
      <li v-on:click="doActions(action)" v-for="action in step.actions" :key="action.step">
        <img rel="preload" :src="action.images">
        <div class="label">
          {{ action.label }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>


</style>

<script>


/* :src="step.step.img" */


import game from '../data.json';

console.log(game)
export default {
  data: function() {
    return {
      step: game.steps.find(step => {
        return step.id === parseInt(this.$route.params.id)
    }),
  }
  },
  watch: {
    '$route.params.id'(to, from) {
      this.step = this.getStep()
    }
  },
  methods: {
    getStep() {
      return {
        step: game.steps.find(
       step => step.id === Number(this.$route.params.id))
      }
    },
    doActions(action) {
      if (action.to) {
        this.$router.push({params: {id: action.to}})
      }
      if (action.lose === 'Game Over') {
        this.$router.push({path: '/lose'})
      }
      if (action.win === 'Win') {
        this.$router.push({path: '/win'})
      }
    }  
  }
}

</script>

<style lang="scss" scoped>
.game__title {
  font-size: 2.5rem;
  text-align: center;
  padding-top: 4rem;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10%;
}

li {
  filter: drop-shadow(0 0 0.6rem black);
  margin: 0 5rem;
  line-height: 2.5rem;
  font-size: 1.5rem;
  transition: transform .2s;
}

li:hover {
  transform: scale(1.3)
}

@keyframes slidein {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

.characters-enter-active {
  animation: slidein 2s;
}

</style>
