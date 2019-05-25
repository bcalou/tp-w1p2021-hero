<template>
<div class="big-header" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <h1>Page {{ $route.params.id }}</h1>
    <h1>{{ phase.garçon.message }}</h1>
    <h1 v-if="character === 'Fille'">{{ phase.fille.message }}</h1>
    
    <!-- VIDEO ET AUDIO -->
<!--   <video class="video" src="../assets/images/BigBuckBunny.mp4" autoplay></video>
 --><!--   <audio src="../assets/audio/test.mp3" autoplay ref="audio"></audio>
 -->
    
    <router-link
      v-for="answer in answers"
      v-bind:key="answer.message"
      class="button"
      :to="answer.link"
    >{{answer.message}}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.big-header {
  background-size: cover;
}
.video {
  height: 100vh;
  width: 100vw;
  object-fit: cover;

}
</style>


<script>

import data from "../../data.json";
// import Map from "../services/mappingGame.js";
import character from '../services/characterService.js';
import step from '../services/stepService.js';


export default {
  data() {
    return {
/*    map: this.createMap(),
      images: [], 
      message: game.steps[this.$route.params.id].message,
      mage: data.game[this.$route.params.id].image,*/
      phase: data.steps[this.$route.params.id],
      answers: this.characterChoice(),
      step: this.setStep(),
      character: character.get(),
      image: data.steps[this.$route.params.id].image    }
  },
  methods: {
    createMap() {
      setTimeout(() => {
        const map = new Map(document.querySelector('.big-header'), 5, game);
        this.images = map.create(this.$route.params.id).map(image => require(image));
      }, 200);
    },
    characterChoice() {
      let answers = data.steps[this.$route.params.id].garçon.answers //attention à GARçON
      let result = []
      let characterName = answers.name // character.get()
      answers.forEach(answer => {
      answer.perso === characterName || answer.perso === 'Tous' ? result.push(answer) : ''
      });
      return result
    },
    setStep() {
      step.set(this.$route.params.id)
    },
/*     getStep(){
      return data.steps.find(
      step => step.id === parInt(this.$route.params.id)
      )
    } */
  },
  watch: {
    '$route.params.id' (to, from){
      this.step = this.getStep();
    }
  },
/*   mounted(){
    setTimeout(() => {
      this.$refs.audio.pause();
    }, 2000)
  } */
};
</script>
