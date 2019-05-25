<template>
  <div class="suspect">
    <h1 class="name-suspect">{{ name }}</h1>
    <img class="suspect-photo" @click="showText" src="../assets/images/suspect1.png"/>
    <br>
  

     <!-- <p>{{ text }}</p> -->
     <!-- <p :text="message">{{ text }}</p> -->
  </div>
</template>

<style scoped>
.suspect {
  /* border: solid red 4px; */
  color: white;
 
}

.name-suspect {
  text-align: center;
  
}
.suspect-photo {
  
  width: 150px;
  bottom: 0;
}
</style>


<script>
import data from '../assets/data.json';
import audioCount from '../services/audioCount';
import Game from './Game.vue';

export default {
  props: ['msg'],
  data() {
    return {
      count: 0,
      text: ''
      
    }
  },
    computed: {
      id() {
        return this.$route.params.id;
      },
      name() {
        return data[this.id].suspects[0].name;
      },
      suspects() {
        return data[this.id].suspects;
      },
      phrases() {
        return data[this.id].suspects.phrases;
      }
  },

  methods: {
    showText() {
      this.text = this.suspects[0].phrases[this.count];
      this.count++;
  
      if(this.count >= this.suspects[0].phrases.length) {
        this.count = 0;
      }

      audioCount.decrement();

      this.$emit('toParent', this.text);
    }
  }
    
};
</script>
