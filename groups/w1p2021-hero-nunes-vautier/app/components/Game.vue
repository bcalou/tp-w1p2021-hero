<template>
<transition name="slode">
<div class="big-header" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <img class="sign" src="../assets/images/sign.svg" alt="sign for questions">
    <div class="question">
    <h1>{{ message }}</h1>
    <div class="answers">
    <router-link
      v-for="answer in answers"
      v-bind:key="answer.message"
      class="button"
      :to="answer.link"
    >{{answer.message}}
    </router-link>
    </div>
    </div>
  </div>
  </transition>
</template>

<style lang="scss" scoped>

h1 {
 font-size: 35px;
 margin-top: 50px;
 color: rgb(53, 31, 12);
 font-weight: bold;
 width: 80vw;
 text-align: center;
}
.big-header {
  background-size: cover;
}
.sign {
  width: 100vw;
  position: absolute;
  bottom: 0;
  opacity: .9;
}
.question {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 30vh;
  width: 100vw;

  .answers {
    height: 300px;
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .button:hover {
      color: white;
    }
  }

  .button {
    font-size: 20px;
    color: rgb(53, 31, 12);
    font-weight: bold;
    background-color: rgba(0,0,0,0);
    transition: all .4s;

    &:hover {
      font-size: 22px;
    }

  }
}
</style>

<script>
import character from '../services/characterService.js';
import step from '../services/stepService.js';
import data from "../data.json";
import theme from '../services/themeService'
import Sound from "../services/soundService.js";

export default {
  data() {
    return {
      question: this.getQuestion(),
      phase: this.setStep(),
      theme: this.themeHandle(),
      image: this.question.image,
      answers: this.question.answers,
      message: this.question.message,
      click: this.clickHandle()
    };
  },
  methods: {
    setStep() {
      step.set(this.$route.params.id)
      this.phase = this.$route.params.id
    },
    getQuestion() {
      let rawJson = data.game[this.$route.params.id]
      let characterName = localStorage.getItem('character')
      
      rawJson.forEach(question => {
        if(question.character === characterName) {
          this.question = question
        } 
      });
      
    },
    themeHandle() {
      theme.state !== 'playing' ? theme.play() : ''
      let toDelete = document.querySelector('audio.active');
      toDelete ? document.body.removeChild(toDelete) : ''
      if(localStorage.getItem('music') === "on") {
        let sound = new Sound(this.question.music.src, this.question.music.loop)
        sound.volume = localStorage.getItem('volumeEvent')
        sound.sound.classList.add('active')
        document.querySelector('.active').play();
        return sound
      }
    },
    clickHandle() {
      setTimeout(() => {
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            if(localStorage.getItem('sounds') === "on") document.querySelector('.clickSound').play();
          })
        })
      }, 200);
      return 'Hello'
    }
  }
};
</script>
