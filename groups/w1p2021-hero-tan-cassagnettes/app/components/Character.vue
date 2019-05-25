<template>
  <div class="big-header">
    <h1>Choisis ta détective</h1>
    <br />
     <router-link 
      class="button button__goBackHome" 
      to='/'>
      Retour à l'accueil</router-link>

  <div class="choice">
    <img @click="choicePlayer1" class="choice__emma" src="../assets/images/Emma.png">
    <img @click="choicePlayer2" class="choice__amanda" src="../assets/images/Amanda.png">
  </div>

    <section class="players">
      <div class="player">
        <div @click="choicePlayer1" class="player1">Emma</div>
        <div class="skill-picto">Skill: +2<img class="picto-audio" src="../assets/images/picto-audio.png" alt="audio_picto"></div>
        <div class="character_description">Fine détective, aux questions aussi précises que subtiles, son air angélique saura vous envoûter et vous faire parler, afin d'obtenir des aveux de vous. Son point fort, l'écoute et la persévérance</div>
      </div>

      <div class="player">
        <div @click="choicePlayer2" class="player2">Amanda</div>
        <div class="skill-picto">Skill: +1 photo</div>
        <div class="character_description">L'observation et le feeling sont ses leitmotiv. Plutôt du style à vivre au jour le jour, à prendre tous les risques sans se soucier du lendemain, elle n'a pas froid aux yeux... d'ailleurs, on l'appelle l'oeil de lynx dans le milieux</div>
      </div>
      
      
    </section>
    
    <template v-if="showPlay === true">
      <router-link class="button button__play" to="/game/1">Jouer</router-link>
    </template>

    
     <div class="music">
      <audio autoplay loop id="player" src="../assets/images/vuejs_projet_sound3.mp3"></audio>
    <div> 
    <button class="button" onclick="document.getElementById('player').play()">Sound on</button> 
    <button class="button" onclick="document.getElementById('player').pause()">Sound off</button> 
      </div>
    </div>

  </div>
</template>

<style scoped>
.players {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  /* border: solid 1px greenyellow; */
  
}

.player {
  
  border: solid 3px black;
  margin: 20px;
  width: 200px;
  height: 200px;
}

.player1, .player2 {
  text-align: center;
  margin-bottom: 20px; 
}

.choice__emma {
  width: 200px;
  height: 200px;
  margin-left: -10px;

  
}
.choice__emma:active {
  border: solid 4px red;
}
.choice__amanda {
  width: 200px;
  height: 200px;
  margin-left: 40px;
}
.choice__amanda:active {
  border: solid 4px red;
  
}
.character_description {
  font-size: 10px;
  line-height: 90%;
  /* border: solid 1px yellow; */
  width: 230px;
  margin-top: 20px;

  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: 110%;

}

.picto-audio {
    /* position: absolute;
    top: 428px;
    left: 460px; */
    width: 30px;
    height: 30px;
    
    
}
.skill-picto {
  font-size: 12px;
}
.button__play {
  position: absolute;
  bottom: 100px;
}
.button__goBackHome {
  position: absolute;
  top: 20px;
  right: 60px;
  font-size: 12px;
}
</style>



<script>
import data from '../assets/data.json';
import audioCount from '../services/audioCount';
import Bedroom from '../components/Bedroom.vue';

export default {
  data() {
    return {
      character: ''
    }
  },
  computed: {
    showPlay() {
      if(this.character != '') {
        return true;
      }
    }
  },
  methods: {
    choicePlayer1(){
      //audioCount.increment();
      audioCount.setvalue(12)
      this.character = 'Emma';
      localStorage.setItem('character', 'Emma');
    },
     choicePlayer2(){
      //audioCount.increment();
      audioCount.setvalue(10);
      this.character = 'Amanda';
      localStorage.setItem('character', 'Amanda');
    }
  }
}
</script>
