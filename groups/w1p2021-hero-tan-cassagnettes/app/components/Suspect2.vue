<template>
  <div class="suspect">
    <h1 class="name-suspect">{{ name }}</h1>
    <img class="suspect-photo" @click="showText" src="../assets/images/suspect2.png"/>
    <br>
    
    <!-- <p v-for="(phrase, i) in phrases"
      :key="i">
      {{  phrases }}</p> -->

    <!-- <p class="showText"></p> -->
    <!-- <p>{{ text }}</p> -->
  </div>
</template>

<style scoped>
.suspect {
  /* border: solid black 4px; */
  color: white;
}

.suspect-photo {
  width: 120px;
  height: 180px;
}
.name-suspect {
  text-align: center;
}

</style>


<script>
import data from '../assets/data.json';
import audioCount from '../services/audioCount';
import Game from './Game.vue';

export default {
  data() {
    return {
      count: 0,
      //name : this.name,
      text: ''
    }
  },
  //props: ['name'],

  computed: {
      id() {
        return this.$route.params.id;
      },
      name() {
        return data[this.id].suspects[1].name;
      },
      suspects() {
        return data[this.id].suspects;
      },
      phrases() {
        return data[this.id].suspects.phrases;
      },
  },

  methods: {
    showText() {
      //var idx = 0;
      //this.text = this.phrases[this.count];
      this.text = this.suspects[1].phrases[this.count];

      // document.querySelector(".showText").innerHTML = this.phrases[this.count];
      this.count++;
  
      if(this.count >= this.suspects[1].phrases.length) {
        this.count = 0;
      }

      audioCount.decrement();
      
      this.$emit('toParent', this.text);
    }
  }
    
};
</script>
