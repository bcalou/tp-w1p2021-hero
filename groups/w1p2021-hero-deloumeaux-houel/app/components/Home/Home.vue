<template>
  <div class="big-header">
    <p> {{ histoire }}</p>

    <router-link class="button" to="/character">Commencer</router-link>
    <audio autoplay loop>
    <source src="../../assets/audio/AmbientHome.mp3" type="audio/mp3">
    </audio>
  </div>
</template>


<style lang="scss" scoped>
@import 'home';
</style>

<script>
import countService from '../../services/countService';
import game from '../../data.json';

export default {
  data() {
    return {
      histoire: "Notre pays subit une terrible pandémie. Votre mission si vous l'acceptez est de récupérer l'antidote qui sauvera l'humanité. Attention, cette mission n'est pas sans risque ! ",
      message: 'SURVIVOR'
    };
  },

  methods: {
    handleClick() {
      countService.increment();
    }
  },

   mounted() {
     // restore level session
     if (localStorage.getItem('step')){
       this.$router.push({path: `/game${localStorage.getItem("step")}`});
     }


   }
};
</script>
