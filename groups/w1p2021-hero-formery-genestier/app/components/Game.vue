<template>
    <div class="big-header">
        <div class="parchemin">
          <div class="parchemin2">
            <p>{{ step.message }}</p>
            <ul>
                <li v-for="answer in step.answers" v-bind:key="answer.text">
                    <router-link :to="answer.goto.toString()">{{ answer.text }}</router-link>
                </li>
            </ul>
          </div>
        </div>
        <img v-bind:src="step.image" alt="image" class="background">
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
        step: this.getStep(),
    }
  },
  watch: {
    "$route.params.id"(to, from) {
      this.step = this.getStep();
    }
  },
  methods: {
    getStep() {
      return game.steps.find(step => {
        return step.step === parseInt(this.$route.params.id, 10);
      });
    }
  }
};
</script>