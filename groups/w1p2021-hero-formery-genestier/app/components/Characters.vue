<template>
  <div class="big-header">
    <img src="/assets/img/characters.jpg" alt="image" class="background">
    <div class="parchemin">
      <div class="parchemin2">
      <h2>Choisissez votre personnage</h2>
        <ul>
          <li v-for="character in characters" v-bind:key="character.name"><router-link to="/game/0" ><button @click="saveCharacter(character.name)">{{ character.name }}</button></router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
    <style>
    h2 {
  color : #333333;
  margin-top: 5%;
  font-family: 'Courgette', cursive;
  font-size : 20px;
  text-align: center;
  line-height : 40px;
}
.parchemin {
  position: absolute;
  right: 10vw;
  font-family: 'Luckiest Guy', cursive;
  background-image: url('../assets/img/parchemin.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.parchemin2 {

  margin-top: 65px;
  width: 60%;
  height: 100%;
}
    </style>
    
<script>
import game from "../data.json";
export default {
  data() {
    return {
        characters: game.characters,
    }
  },
  methods: {
    saveCharacter(characterName) {
      localStorage.setItem('characterName', characterName);
    }
  }
};
</script>
