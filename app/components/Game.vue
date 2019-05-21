<template>
  <div class="big-header">
    <h1 class="bill">{{ message }}</h1>
    <br> 
    <img class="background" :src="background">
    <router-link class="button" :to="route1">Aller à Droite</router-link>
    <router-link class="button" :to="route2"> Aller à Gauche</router-link>
  </div>
</template>


<script>
const data = require("../json/data.json");
import countService from '../json/countServices';

export default {
 computed: {
    route1() {
      return `${data[this.$route.params.id].choix1}`;
    },
    route2() {
      return `${data[this.$route.params.id].choix2}`;
    },
    message() {
      return `${data[this.$route.params.id].text}`;
    },
    background() {
      return `${data[this.$route.params.id].img}`;
    },
  },
};
</script> 


