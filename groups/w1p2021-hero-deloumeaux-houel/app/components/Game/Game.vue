<template>
<div class="big-header" v-bind:style="{ backgroundImage: 'url(' + step.background + ')' }">
  <div class="text">
    <h1 class="title" v-if="$route.params.id">{{step.title}}</h1>
    <br/>
    <h2 class="question" v-if="$route.params.id">{{step.question}}</h2>
  </div>
    <ul class="buttons">
      <li v-for="action in step.actions" v-bind:action="action" v-bind:key="action.title">
        <router-link class="button" :to="action.to.toString()">{{ action.title }}</router-link>
    </ul>
    <audio autoplay loop>
      <source src="../../assets/audio/AmbientGame.mp3" type="audio/mp3">
    </audio>
 </div> 
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap');

.big-header {
  background-size: cover;
  background-position: center;
  overflow: hidden;
  background-repeat: no-repeat;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: black; 

.text {
  position: absolute;  
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px 15px 0px 0px;
  background: rgba(255, 255, 255, 0.75);
  width: 1000px;
  height: 226px;
  font-weight: lighter;
  text-align: justify; 
  font-size: 24px; 
  top: 50px; 

  .title {
    margin: 10px 50px 0px 50px; 
    line-height: 120%; 
  }

  .question {
    margin: 10px 50px 0px 50px; 
    line-height: 130%; 
  }

}

}
.buttons {
  display: flex; 
  justify-content: space-around;
  width: 70vw;
  position: absolute; 
  bottom: 150px; 

  .button {
    letter-spacing: 2;
    text-align: center;
    color: black;
    background: rgba(252, 252, 252, 0.5); 
    border-radius: 55px;
    cursor: pointer;
    border: 6px solid rgba(0, 0, 0, 0.1);
    font-size: 18px; 
    padding: 30px 60px 30px 60px;
    opacity: 0.8;
  }
  .button:hover {
    opacity: 1;
    background: #304040; 
    color: white; 

  }
}


</style> 


<script>
import game from "../../data.json";

export default {

  data: function() {
    return {
      step: this.getStep(),
    };
  },

  watch: {
    "$route.params.id"(to, from) {
      this.step = this.getStep();
      localStorage.setItem('step', this.step.id)

    }
  },

  methods: {
    getStep() {
      return game.steps.find(step => {
        return step.id === parseInt(this.$route.params.id, 10);
      });

    }
  },

  mounted(){
    localStorage.setItem('step', this.step.id)

  }
};
</script>