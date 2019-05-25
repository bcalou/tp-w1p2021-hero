<template>
  <div class="big-header">
    <img v-bind:src="content.image" alt="image" class="background">
    <div class="parchemin">
          <div class="parchemin2">
            <p>{{ content.message }}</p>
            <ul>
                <li v-for="answer in content.answers" v-bind:key="answer.text">
                    <router-link :to="answer.goto.toString()">{{ answer.text }}</router-link>
                </li>
            </ul>
          </div>
        </div>
  </div>
</template>
<style>
p {
  color : #333333;
  margin-bottom: 10vh;
  margin-top: 10vh;
  font-family: 'Courgette', cursive;
  font-size : 25px;
  text-align: justify;
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
ul {
  width: 100%;
  margin-top: 30px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
}
li {
  margin-bottom: 5vh;
  
}
li::first-letter {
  text-transform: uppercase;
}
a{
  text-align :left;
  text-decoration : none;
  color : black ;
  line-height: 25px;
  font-size : 20px;
  transition: 0.3s;
}
a:hover{
  color : #A8A063;
  transition: 0.3s;
}
</style>

<script>
import game from "../data.json";
export default {
  data() {
    return {
        content: game.victory[0]
    }
  }
};
</script>
