<template>
  <div class="big-header">
    <div class ="buttons">
    <router-link class="button" to="/game/1">Choisir ce personnage</router-link>
    <router-link class="button" to="/game/1">Choisir ce personnage</router-link>
    </div>
    	<audio autoplay loop>
      <source src="../../assets/audio/AmbientHome.mp3" type="audio/mp3">
    </audio>
  </div>
  
</template>

<style lang="scss" scoped>
@import "Character";
</style>


<script>
import countService from '../../services/countService';
import json from '../../data.json';


export default {
  computed: {
    id(){
      return this.$route.params.id;
    },
    action1(){
      return json[this.id].toOne;
    },
    action2(){
      return json[this.id].toTwo;
    },
    BTN1(){
      return json[this.id].BTN1;
    },
    BTN2(){
      return json[this.id].BTN2;
    }
  }
}

  
</script>
