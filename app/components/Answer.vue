<template>
  <div class="big-header">
    <h1>Répondre à la question</h1>
    <br />
    <p>{{id}}</p>
    <label for="userAnswer">Entrez votre réponse</label>
    <input type="text" id="userAnswer" name="userAnswer" class="userAnswer" maxlength="100" value="You answer"/>
    <!-- <router-link 
      class="button" 
      to="/game/1">VALIDER</router-link> -->
    <!-- <router-link 
      class="button" :to="'/game/ + goto'">
      Répondre</router-link> -->
    <!-- <button :click="handleAnswer"></button> -->
     <!-- <router-link 
      class="button" :to="'/game/' + goto">
      Répondre</router-link> -->

    <router-link 
      class="button" 
      :to="'/game/' + goto">
      Répondre
    </router-link>
  
  </div>
</template>

<script>
import data from '../assets/data.json';
import Game from '../components/Game.vue';
import audioCount from '../services/audioCount';

export default {
  computed: {
      id() {
        return this.$route.params.id;
      },
      goto() {
        return data[this.id].goto;
      }
      // answer() {
      //   return data[this.id].answer;
      // },
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
  },
  methods: {

  }
}
</script>