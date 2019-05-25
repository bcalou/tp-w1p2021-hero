<template>
  <div class="game_buttons">
  <router-link to="/">
    <div class="game__backHome"><img src="../assets/images/icons/home.svg" />
    </div>
  </router-link>
  <div class="game__mute" onclick="document.getElementById('music').pause()"><img src="../assets/images/icons/volume_off.svg" /></div>
  <div class="game__unmute" onclick="document.getElementById('music').play()"><img src="../assets/images/icons/volume_on.svg" /></div>
  <div class="game">
    <audio id="music" src="../assets/audios/theme.mp3" autoplay loop></audio>
    <img :src="step.background" :alt="step.background" class="game__image">
    <h1 v-html="step.title" class="game__title">{{step.title}}</h1>
    <div class="game__content">
      <p v-html="step.description" class="game__description">{{step.description}}</p>
      <div class="game__list">
        <router-link class="game__nextstep" v-for="action in step.actions" :key="action.value" :to="action.to.toString()">
        <span @click="countStep">{{action.label}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  // Import
  import data from "../data.json";
  import CountService from "../services/CountService";
  
  export default {
      data: function() {
          return {
              step: data.steps.find(s => s.id === parseInt(this.$route.params.id))
          };
      },
      mounted: function() {},
      methods: {
          getStep() {
                  return data.steps.find(s => s.id === parseInt(this.$route.params.id));
              },
              countStep() {
                  const stepCountNub = data.steps.find(
                      s => s.id === parseInt(this.$route.params.id)
                  );
                  CountService.count(CountNub.id);
              },
      },
      watch: {
          "$route.params.id" (to, from) {
              this.step = this.getStep();
              this.countStep();
          }
      }
  };
  
</script>