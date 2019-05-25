<template>
  <div>
    <div v-if="step.id <= 2" class="firstStep">
      <h1 @click="toggle" class="firstStep__title firstStep__title--enfer">ENFER</h1>
      <h1 class="firstStep__title firstStep__title--paradis">PARADIS</h1>
    </div>
    <transition name="fade" appear> 
      <div v-if="step.conversation === true && visible === true">
        <img class="conversation" :src="step.conversationBox" alt="Conversation Text">
        <div class="conversation__box">
          <span @click="toggle" class="conversation__close">X</span>
          <transition name="bounce"> 
            <p class="conversation__text">{{ step.messages[position] }}</p>
          </transition>
          <span v-if="step.conversationNext === true && position < step.messages" @click="next" class="conversation__next">suivant</span>
          <span v-if="step.conversationNext === true && position >= 1 " @click="previous" class="conversation__previous">precedent</span>
        </div>
      </div>
    </transition> 
    <!-- <audio src="../assets/sounds/heaven-sound.mp3" autoplay loop controls></audio> -->
      <div @click="mute" class="sounds">
        <img class="sound sound--on" src="../assets/img/sound-on.png" alt="Logo Sound On">
        <img class="sound sound--off is-hidden" src="../assets/img/sound-off.png" alt="Logo Sound On">
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
          </router-link>
        </li>
      </ul>
      <div v-if="step.conversation === true">
        <img class="conversation" :src="step.conversationBox" alt="Conversation Text">
        <div class="conversation__box">
          <span class="conversation__close">X</span>
          <p class="conversation__text">{{ step.messages[$position] }}</p>
          <span v-if="step.conversationNext === true" @click="next" class="conversation__next">suivant</span>
        </div>
      </div>
      <div class="menu">
        <router-link class="button button--menu" to="/">Menu</router-link>
      </div>
      <audio src="../assets/sounds/game-sound.mp3" autoplay loop controls></audio>
      <div @click="mute" class="sounds">
        <img class="sound sound--on" src="../assets/img/sound-on.png" alt="Logo Sound On">
        <img class="sound sound--off is-hidden" src="../assets/img/sound-off.png" alt="Logo Sound On">
      </div>
    </div>
  </div>
</template>

<script>
import game from '../data';
console.log(game);

export default {
   data() {
    return {
      visible: true,
      position: 0,
    }
  },
  computed: {
    step() {
      return game.steps.find(step => {
        return step.id === Number(this.$route.params.id)
      })
    }
  },
  mounted: function() {
    console.log('Is Mounted');
  },
  methods: {
    mute() {
      var soundOn = document.querySelector('.sound--on');
      var soundOff = document.querySelector('.sound--off');
      var sound = document.querySelector('audio');

      soundOn.classList.toggle('is-hidden');
      soundOff.classList.toggle('is-hidden');

      if (soundOn.classList.contains('is-hidden')) {
        sound.muted = true;
      } else {
        sound.muted = false;
      }
    },
    toggle() {
      this.visible = !this.visible
    },
    next() {
      this.position++;
    },
    previous() {
      this.position--;
    }
  }
}
</script>
