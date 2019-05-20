<template>
  <div class="suspect">
    <h1 @click="showText" :key="susp.suspectId">Suspect {{ name }}</h1><br>
    <!-- <div>{{ susp[susp.suspectId] }}</div> -->
    <!-- <p v-for="(phrase, i) in phrases"
      :key="i">
      {{  phrases }}</p> -->

    <p id="showText" ></p>
  </div>
</template>

<style scoped>
.suspect {
  border: solid red 4px;
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
      name : 'Jun',
      //suspectID: 0,
      phrases: [
          "phrase1.1jun",
          "phrase1.2jun",
          "phrase1.3jun"
      ],
      susp: [
        { suspectID: 0, 
          name: "Jun", 
          text: [
            'phrases1.jun',
            'phrases2.jun',
            'phrases3.jun'
          ]
        },
        { suspectID: 1, 
          name: "Yukio", 
          text: [
            'phrase1.yukio',
            'phrase2.yukio',
          ]
        },
        { suspectID: 2, 
          name: "Noriko", 
          text: [
            'phrase1.noriko',
            'phrase2.noriko',
          ] 
        }
      ]
    }
  },
  props: ['suspectId','text'],

  methods: {
    showText() {
      //var idx = 0;
      document.getElementById("showText").innerHTML = this.phrases[this.count];
      this.count++;
  
      if(this.count >= this.phrases.length) {
        this.count = 0;
      }

      audioCount.decrement();
    }
  }
    
};
</script>
