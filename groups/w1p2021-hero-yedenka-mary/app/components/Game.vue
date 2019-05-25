<template>
  <div class="big-header">
    <img class="background" :src="background">
    <div class="wrapper">
      <h1 class="message">{{ message }}</h1>
      <div class="wrapper--buttons">
        <router-link v-if="button1" class="button button1" :to="route1">{{ button1 }}</router-link>
        <router-link v-if="button2" class="button button2" :to="route2">{{ button2 }}</router-link>
        <router-link v-if="button3 && show" class="button button3" :to="route3">{{ button3 }}</router-link>
        <router-link v-if="button4" class="button4" :to="route1"><button class="button" @click="map">{{ button4 }}</button></router-link>
        <router-link v-if="button5" class="button5" :to="route1"><button class="button" @click="tresor">{{ button5 }}</button></router-link>
        <router-link v-if="button6 && showE" class="button button6" :to="route4">{{ button6 }}</router-link>
      </div>
    </div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <div id="audio">
      <button class="button pauseMusic" v-on:click="play"><i class="fa fa-pause"></i></button>
      <audio src="../assets/monkey-island-the-scummbar-ost.mp3" autoplay loop refs="audioElm"></audio>
    </div>
  </div>
</template>

<style>

.pauseMusic {
  position: absolute;
  bottom: -45vh;
  left: -45vw;
}
</style>


<script>
const data = require("../json/data.json");
import countService from '../json/countServices';
import saveBoussole from '../json/saveBoussole.js';
import saveEpee from '../json/saveEpee.js';
import saveMap from '../json/saveMap.js';
import saveTresor from '../json/saveTresor.js';

export default {
  computed: {
    route1() {
      return `${data[this.$route.params.id].choix1}`;
    },
    route2() {
      return `${data[this.$route.params.id].choix2}`;
    },
    route3() {
      return `${data[this.$route.params.id].choix3}`;
    },
    route4() {
      return `${data[this.$route.params.id].choix3}`;
    },
    message() {
      return `${data[this.$route.params.id].text}`;
    },
    button1() {
      return `${data[this.$route.params.id].button1}`;
    },
    button2() {
      return `${data[this.$route.params.id].button2}`;
    },
    button3() {
      return `${data[this.$route.params.id].button3}`;
    },
    button4() {
      return `${data[this.$route.params.id].button4}`;
    },
    button5() {
      return `${data[this.$route.params.id].button5}`;
    },
    button6() {
      return `${data[this.$route.params.id].button6}`;
    },
    background() {
      return `${data[this.$route.params.id].img}`;
    },
    show() {
      return localStorage.getItem('outil') === 'boussole'
    },
    showE() {
      return localStorage.getItem('outil') === 'epee'
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.$refs.audio.pause();
  //   }, 1000);
  // },
  methods: {
    map() {
      saveMap.save();
      if (localStorage.getItem('item') === 'carte' && localStorage.getItem('item2') === 'tresor') {
        this.$router.push('../win');
        location.reload();
        localStorage.clear();
      }
    },
    tresor() {
      saveTresor.save();
      if (localStorage.getItem('item') === 'carte' && localStorage.getItem('item2') === 'tresor') {
        this.$router.push('../win');
        location.reload();
        localStorage.clear();
      }
    },
    //marche pas
    play: function(event) {
      var a = this.$refs.audioElm;
      console.log(this.$refs.audioElm);
      if (a.paused) {
        a.play();
      } else {
        a.pause();
      }
    }
  }
};
</script>


