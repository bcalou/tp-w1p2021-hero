<template>
  <div class="big-header">
    <h1>Niveau {{ id }} - {{ title }}</h1>
    <!-- <h1>{{ subtitle }}</h1> -->
    <br />
    <div 
      v-for="(suspect, i) in suspects" :key="i" class="button" @click="handleAudio">
        {{ suspect.name }} - {{ suspect.phrases.length }}
    </div>
    <p class="show-text">Texte attendu</p>
    <!-- <h2 v-for="(phrase , index) in phrases"></h2> -->
    <!-- <router-link 
      class="button" 
      :to="'/game/' + goto">
      Niveau suivant
    </router-link> -->
    <router-link 
      class="button button__answer" 
      :to="'/answer/' + id">
      Répondre</router-link>

    <Suspects></Suspects>

    <router-link 
      class="button button__bedroom" 
      to="/bedroom">
      Aller à la chambre
    </router-link>


    <!-- <p>{{count}}</p> -->

    <Tools></Tools>
  </div>
</template>


<style scoped>
  .button__bedroom {
    position: absolute;
    right: 60px;
    width: 70px;
  }
  .button__answer {
    position: absolute;
    bottom: 100px;
  }
</style>

<script>
import data from '../assets/data.json';
import audioCount from '../services/audioCount';
import Tools from '../components/Tools.vue';
import Suspects from '../components/Suspects.vue'



export default {
    data() {
      return {
        count : audioCount.value(),
        textCount: 0
      }
    },
    components: {
      Tools,
      Suspects
    },
    computed: {
      id() {
        return this.$route.params.id;
      },
      title() {
        return data[this.id].title;
      },
      goto() {
        return data[this.id].goto;
      },
      // choices() {
      //   return data[this.id].choices;
      // },
      suspects() {
        return data[this.id].suspects;
      }
      // showMessage() {
      //   //document.querySelector('.show-text').innerHTML = id; 
      //   // let memo = i;
      //   // i++;
      //   //console.log(data[this.id].suspects);
      //   // if( i >= suspects.phrases.length){
      //   //   i = 0;
      //   // }
      // }
    },
    methods:{
      
      handleAudio() {
        console.log('Compte bordel');
        audioCount.decrement();

        // let i = this.id;
        // i = 0;  
        document.querySelector('.show-text').innerHTML = this.suspects[this.textCount]['phrases'][this.textCount];
        // //let memo = i;
        this.textCount++;

         if(this.textCount >= this.suspects[this.textCount]['phrases'].length) {
              //document.getElementById("demo").innerHTML = phrases[0]; 
            this.textCount = 0;
          }

      },
      lostGame() {
        if (localStorage.getItem('audio') < 0) {
          console.log('perdu');
          $router.push({ path : 'loose'});
        }
      }


    }
}
</script>