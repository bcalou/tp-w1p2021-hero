<template>
  <div class="big-header">
    <div>
      <h1 class="title"> {{ title }} </h1>
      <p> {{ content }} </p>
    </div>
    <img class="flame" src="../assets/img/flame.png" alt="petite flame">
    <div>
      <router-link class="choice" to="/game"> {{ choiceUn }} </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.title {
  color: red;
  font-size: 6rem;
  text-align: center;
  font-family: 'Black And White Picture', sans-serif;
}


p {
  position: absolute;
  right: 20px;
  margin-top: 40vh;
  width: 40vw;
  font-size: 3rem;
  color: white;
  font-family: 'Black And White Picture', sans-serif;
}

.flame {
  position: fixed;
  margin-top:100px;
}

.choice {
  background-color: black;
  position: absolute;
  bottom: 30px;
  text-align: center;
  color: gold;
  right: 90px;
  top: 125vh;
  text-decoration: none;
  font-family: 'Black And White Picture', sans-serif;
  font-size: 2rem;
}

</style>


<script>
import game from "../data.json";

console.log(game);
console.log(game.steps[0].actions[0]);



export default {
  computed: {
    title() {
      return game.steps[0].title;
    },
    choiceUn() {
      return game.steps[0].actions[0].label;
    },
    content() {
      return game.steps[0].content;
    }
  },
  data() {
    return {
    'background': require('../assets/img/background.png'),
    }
  }
}
</script>