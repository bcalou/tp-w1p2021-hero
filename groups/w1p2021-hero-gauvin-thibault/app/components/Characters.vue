<template>
    <div class="big-header">
      <h1>Selectionez un personnage à l'aide de votre curseur pour commencer a jouer</h1>
      <div class="characters">
          <Character  v-for="character in characters" :key="character.name" :character="character" />
      </div>
      <div class="text">
        <router-link class="button" to="/home">Retour</router-link>
      </div>
    </div>
<!--     <section class="homegif"></section>
    <section class="title">
      <p>Dungeon rush</p>
    </section>

    <section class="choose">
      <ul class="characters">
        <li>
          <img src="" alt="charact1">
          <p>le mec</p>
        </li>
        <li>
          <img src="" alt="charact2">
          <p>la meuf</p>
        </li>
      </ul>
    </section>
    <section class="text">
      <p>Selectionez un personnage à l'aide de votre curseur pour commencer a jouer</p>
    </section> -->
</template>
<style lang="scss" scoped>
.big-header {
  width: 940px;
  height: 940px;
  background-image: url(../assets/images/coco/character.gif);
  background-size: 135% 101%;
  background-position: center;
  position: relative;
}

h1{
  background-color: black;
display: flex;
align-items: center;
justify-content: space-around;
width: 500px;
height: 30px;
top: 0px;
position: absolute;
left: 940px;
padding: 120px;
line-height: 140%;
text-align: center;
font-family: "Rubber Biscuit";
font-weight: bold;
color: gold;
font-size: 30px;
}
.characters {
  position: absolute;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 740px;
  height: 530px;
  left: 940px;
  top: 270px;
  text-align: center;
  font-family: "Rubber Biscuit";
  font-weight: bold;
  color: gold;
  font-size: 20px;
}
.text{
background-color: black;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
width: 740px;
height: 140px;
position: absolute;
top: 800px;
left: 940px;
  .button{
    border: 0px; 
  }
}
</style>
<script>
import Character from './Character.vue';
import data from "../../data.json";


export default {
  data: function() {
    return {
      message: 'Choisissez votre personnage',
      characters: data.characters,
      image: data.character.image,
/*       characters: [
        {
        name : "Peter",
        speciality : "resiste aux morsures",
        image : require('/assets/images/coco/Bitmap.png')
      },
      {
        name : "Rocco",
        speciality : "resiste au poison",
        image : require('/assets/images/coco/Bitmap2.png')
      }
      ] */
    }
  },methods: {
        setBackground() {
          document.addEventListener('DOMContentLoaded', () => {
          let bigHeader = document.querySelector('.big-header')
          bigHeader.style.backgroundImage = 'url(' + data.home.image + ')'
          return data.home.image
      })
    }
    },
  components: {
    Character
  }
};
</script>