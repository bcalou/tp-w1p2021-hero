<template>
  <div class="big-header">
    <h1>Question du niveau {{id}}</h1>
    <br />
    <h1 class="question">{{subtitle}}</h1>
    <label for="userAnswer">Saisis ta réponse et appuye sur entrer</label>
    <input type="text" id="userAnswer" name="userAnswer" class="userAnswer" maxlength="100" value="your answer" v-model.lazy="userAnswer" autocomplete="off" />
   

  


    <router-link 
      class="button button__goback" 
      :to="'/game/' + id">
      Retour au salon
    </router-link>

    <template v-if="handleAnswer">
      <p class="rightAnswer" >Bravo! Tu peux maintenant passer <br>au niveau suivant</p>
      <router-link 
        class="button button__rightAnswer" 
        :to="'/game/' + goto">
        Niveau suivant
      </router-link>
    </template>

    <div class="errorAnswer" v-if="errorAnswer === true">Mauvaise réponse</div>


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
h1 {
  margin-bottom: 20px;
 
}
.button__goback {
  position: absolute;
  left: 60px;

  text-align: center;
  line-height: 20px;

  background: radial-gradient(12.39px at 50% 81.51%, #FFFFFF 0%, #FFF3DB 100%), #FFF3DB;
  border: 5px solid #4B2400;
  box-sizing: border-box;
  border-radius: 13px;
  color: black;
}
label {
  font-size: 10px;

  margin-top: 12px;
  margin-bottom: 12px;
}
.errorAnswer {
  color: red;
  margin-top: 15px;
}
.rightAnswer {
  color: greenyellow;
  margin-top: 15px;
  margin-bottom: 15px;

  text-align: center;
  line-height: 20px;
}
.button__rightAnswer {
   color: greenyellow;
}
.question {
  font-size: 12px;
  color: yellow;
}
</style>

<script>
import data from '../assets/data.json';
import Game from '../components/Game.vue';
import audioCount from '../services/audioCount';

export default {
  data() {
    return {
        userAnswer: ''
    }
  },
  computed: {
      id() {
        return this.$route.params.id;
      },
      goto() {
        return data[this.id].goto;
      },
      answer() {
        return data[this.id].answer;
      },
      subtitle() {
        return data[this.id].subtitle;
      },
      // goBack() {
      //   return this.$router.go(-1);
      // }
      // handleAnswer(){
      //   var userAnswer = document.querySelector('.userAnswer').value;
        
      //   if(userAnswer != answer){
      //     return this.$router.push({path:'home'});
      //   } else {
      //     return this.$router.push({path: goto})
      //   }
      // }

      handleAnswer(){
        if(this.userAnswer.toLowerCase().trim() === this.answer.toLowerCase() && this.id === '4') {
          this.$router.push({name: 'win'});
        } else if (this.userAnswer.toLowerCase().trim() === this.answer.toLowerCase() && this.id !== '4') {
          return true
        }
      },

      errorAnswer() {
        if (this.userAnswer.toLowerCase().trim() !== this.answer.toLowerCase() && this.userAnswer !== '') {
          return true
        }
      }
  }
}
</script>