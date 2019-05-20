<template>
  <div class="suspect">
    <h1 @click="showText">Suspect {{ name }}</h1><br>
    <!-- <p v-for="(phrase, i) in phrases"
      :key="i">
      {{  phrases }}</p> -->

    <p class="showText" ></p>
  </div>
</template>

<style scoped>
.suspect {
  border: solid black 4px;
  color: black;
}

h1 {
   border: solid blue 4px;
}

</style>


<script>
import audioCount from '../services/audioCount';
import Game from './Game.vue';

export default {
  data() {
    return {
      count: 0,
      name : 'Noriko',
      suspectID: 0,
      phrases: [
          "phrase1.1nk",
          "phrase1.2nk",
          "phrase1.3nk"
        ]
    }
  },
  // props: ['name']

  methods: {
    showText() {
      //var idx = 0;
      document.querySelector(".showText").innerHTML = this.phrases[this.count];
      this.count++;
  
      if(this.count >= this.phrases.length) {
        this.count = 0;
      }

      audioCount.decrement();
    }
  }
    
};
</script>
