<template>
  <div class="big-header">
    <h1>Répondre à la question</h1>
    <br />
    <p>{{id}}</p>
    <label for="userAnswer">Entrez votre réponse</label>
    <input type="text" id="userAnswer" name="userAnswer" class="userAnswer" maxlength="100" value="your answer" v-model="userAnswer" autocomplete="off" />
   

     <!-- <button @click="handleAnswer" type="submit">Valider</button> -->
      <button type="submit">Valider</button>


    <router-link 
      class="button button__goback" 
      :to="'/game/' + id">
      Retour au salon
    </router-link>
    
    <template v-if="handleAnswer">
      <p>Bravo! Tu peux maintenant passer au niveau suivant</p>
      <router-link 
        class="button" 
        :to="'/game/' + goto">
        Niveau suivant
      </router-link>
    </template>
  </div>
</template>

<style scoped>
.button__goback {
  position: absolute;
  left: 60px;
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
      }
  }
}
</script>