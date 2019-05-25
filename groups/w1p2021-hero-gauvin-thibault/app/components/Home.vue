<template>
  <div class="big-header">
     <h1>{{ message }}</h1>
    <br />
    <h2>
      <p>{{description}}</p>
    </h2>
    <div class="text">
      <router-link class="button" to="/characters">Choisir un personnage</router-link>
      <router-link class="button" :to="'/game/' + getStep()">Reprendre</router-link>
    
    <audio src="../assets/images/sound/cladun.mp3" autoplay loop ref="audio"></audio>
    
  </div>
</template>

<style lang="scss" scoped>
.big-header {
  width: 940px;
  height: 940px;
  background-image: url(../assets/images/coco/home.gif);
  background-size: cover;
  background-position: 40% 50%;
  position: relative;
}
h1{
  background-color: black;
display: flex;
align-items: center;
justify-content: space-around;
width: 700px;
height: 400px;
top: 0px;
position: absolute;
left: 940px;
padding: 20px;
line-height: 140%;
text-align: center;
font-family: "Rubber Biscuit";
font-weight: bold;
color: gold;
font-size: 130px;
}
h2{
  display: flex;
align-items: center;
justify-content: center;
  background-color: black;
  width: 740px;
  height: 300px;
  position: absolute;
  top: 400px;
  left: 940px;
  p{
    padding: 100px;
    text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 20px;
    line-height: 180%;
  }
}
.text{
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 740px;
  height: 240px;
  position: absolute;
  top: 700px;
  left: 940px;
  }
</style>


<script>
import step from "../services/stepService.js";
import data from "../../data.json";
/* import Sound from "../services/soundService";
 */

export default {
  data() {
    return {
      message: "DUNGEON RUSH",
      description :'Vous êtes retenu prisonier dans ce donjon de 25 pièces vous devez trouver les 4 runes répendu a ses quatres coins. Mais attention, des embuches se trouveront sur votre chemin !',
      image: data.home.image,
      sound: data.home.music.src,
      soundIcon: "sound-icon",
    };
  },
  methods: {
    getStep() {
      return step.get();
    },
  },
  mounted(){
    setTimeout(() => {
      this.$refs.audio.pause();
    }, 2000)
  }
};
</script>
