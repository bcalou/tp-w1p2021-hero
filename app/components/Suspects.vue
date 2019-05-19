<template>
  <div class="suspect">
    <h1 @click="showText">Suspect {{ name }}</h1><br>
    <!-- <p v-for="(phrase, i) in phrases"
      :key="i">
      {{  phrases }}</p> -->

    <p id="demo" ></p>
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

export default {
  data() {
    return {
      count: 0,
      name : 'Jun',
      suspectID: 0,
      phrases: [
          "phrase1.1jun",
          "phrase1.2jun",
          "phrase1.3jun"
        ]
    }
  },
  // props: ['name']

  methods: {
    showText() {
      //var idx = 0;
      document.getElementById("demo").innerHTML = this.phrases[this.count];
      this.count++;
  
      if(this.count >= this.phrases.length) {
        this.count = 0;
      }
    }
  }
    
};
</script>
