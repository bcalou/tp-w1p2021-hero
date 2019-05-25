<template>
<div>
  <div v-if="step.id <= 2" class="firstStep">
    <h1 class="firstStep__title firstStep__title--enfer">ENFER</h1>
    <h1 class="firstStep__title firstStep__title--paradis">PARADIS</h1>
  </div>
  <div>
    <img class="conversation" :src="step.conversation" alt="Conversation Text">
    <div class="conversation__text">
      <span class="conversation__close">X</span>

    </div>
  </div>
  <div v-if="step.id > 2" class="game"> <!--TEMPLATE GAME AFTER STEP 2-->
    <img  class="game__screen" :src="step.background" alt="Background Map">
    <div class="inventory">
      <div class="inventory__top"></div>
      <div class="inventory__list"></div>
      <div class="inventory__bottom"></div>
      <h1 class="inventory__title">INVENTORY</h1>
    </div>
    <ul>
      <li v-for="(action, index) in step.actions" :key="index">
        <router-link :to="action.to.toString()">
          <div v-if="action.arrow === 'left'" class="game__arrows game__arrows--left"></div>
          <div v-if="action.arrow === 'top'" class="game__arrows game__arrows--top"></div>
          <div v-if="action.arrow === 'right'" class="game__arrows game__arrows--right"></div>
          <div v-if="action.arrow === 'bottom'" class="game__arrows game__arrows--bottom"></div>
          <!-- {{ action.label }} -->
        </router-link>
      </li>
    </ul>
    <!-- <div>
      <img class="conversation" :src="step.conversation" alt="Conversation Text">
    </div> -->
    <div class="menu">
      <router-link class="button button--menu" to="/">Menu</router-link>
    </div>
  </div>
</div>
</template>

<script>
import game from '../data';
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
