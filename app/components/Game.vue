<template>
  <div class="big-header">
    <h1>Niveau {{ id }} - {{ title }}</h1>
    <!-- <h1>{{ subtitle }}</h1> -->
    <br />
    <div 
      v-for="(suspect, index) in suspects" 
      :key="index" 
      class="button" >
        {{ suspect.name }} - {{ suspect.phrases.length }}
    </div>
    <!-- <h2 v-for="(phrase , index) in phrases"></h2> -->
    <router-link 
      class="button" 
      to="/answer">
      Répondre
    </router-link>
  </div>
</template>

<script>
import data from '../assets/data.json';
import audioCount from '../services/audioCount';



export default {
    computed: {
      id() {
        return this.$route.params.id;
      },
      title() {
        return data[this.id].title;
      },
      goto() {
        return data[this.id].goto;
      },
      // choices() {
      //   return data[this.id].choices;
      // },
      suspects() {
        return data[this.id].suspects;
      },

    }
    // methods:{
    //   eyes(){
    //     console.log(suspects.name);
    //   }
    // }
};
</script>