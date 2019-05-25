<template>
  <div class="big-header">
    <h1>Niveau {{ id }} - {{ title }}</h1>
    <!-- <h1>{{ subtitle }}</h1> -->
    <br />

    <router-link 
      class="button button__goBackHome" 
      to='/'>
      Retour à l'accueil</router-link>

    <img class="game-play" src="../assets/images/gameplay.png">
    <!-- <div 
      v-for="(suspect, i) in suspects" :key="i" class="button" @click="handleAudio">
        {{ suspect.name }} - {{ suspect.phrases.length }}
    </div>
    <p class="show-text">Texte attendu</p> -->
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

  <section class="suspects">
    <Suspect1 class="suspect1" @toParent="toParent"></Suspect1>
    <Suspect2 @toParent="toParent"></Suspect2>
    <Suspect3 @toParent="toParent"></Suspect3>
    <Suspect4 @toParent="toParent"></Suspect4>
  </section>

    <!-- <p :msg='text'>{{ msg }} ici</p> -->
    <!-- <p :msg='text'>{{ msg }}</p> -->
    <p class="paragraph">{{ msg }}</p>
    
    <router-link 
      class="button button__bedroom" 
      to="/bedroom">
      Aller dans la chambre
    </router-link>

    <p class="showText"></p>
    <!-- <p>{{count}}</p> -->

    <template v-if="lostGame === true">
      <h1>C'est perdu</h1>
    </template>

    <Tools></Tools>

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
  .button__bedroom {
    position: absolute;
    right: 60px;
    width: 140px;
    font-size: 12px;
    line-height: 20px;

    background: radial-gradient(12.39px at 50% 81.51%, #FFFFFF 0%, #FFF3DB 100%), #FFF3DB;
    border: 5px solid #4B2400;
    box-sizing: border-box;
    border-radius: 13px;
    color: black;
  }
  .button__answer {
    position: absolute;
    bottom: 45px;
    color: black;
    line-height: 20px;

    background: radial-gradient(12.39px at 50% 81.51%, #FFFFFF 0%, #FFF3DB 100%), #FFF3DB;
    border: 5px solid #4B2400;
    box-sizing: border-box;
    border-radius: 13px;
    color: black;
  }
  .suspects {
    position: absolute;
    display: flex;
    bottom: 200px;
  }
  .paragraph {
    position: absolute;
    top: 260px;
    border: solid 3px rgb(255, 154, 3);
    padding: 10px;
    background-color: blanchedalmond;
    color: black;
    /* text-align: center; */
    border-radius: 13px;
    font-size: 10px;
    width: 450px;
    line-height: 15px;
  }
  .game-play {
    display: block;
    width: 100vw;
    height: 70vh;
  }
  /* .suspect1 {
    position: absolute;
    left: 0;
  } */
  .button__goBackHome {
    position: absolute;
    top: 20px;
    right: 60px;
    font-size: 12px;
  }
</style>

<script>
import data from '../assets/data.json';
import audioCount from '../services/audioCount';
import Tools from '../components/Tools.vue';
import Suspect1 from '../components/Suspect1.vue';
import Suspect2 from '../components/Suspect2.vue';
import Suspect3 from '../components/Suspect3.vue';
import Suspect4 from '../components/Suspect4.vue';



export default {
    data() {
      return {
        //count : audioCount.value(),
        //text: '',
        textCount: 0,
        msg:'...'
        // susp: [
        //   { suspectID: 0, 
        //     name: "Jun", 
        //     text: [
        //       'phrases1.jun',
        //       'phrases2.jun',
        //       'phrases3.jun'
        //     ]
        //   },
        //   { suspectID: 1, 
        //     name: "Yukio", 
        //     text: [
        //       'phrase1.yukio',
        //       'phrase2.yukio',
        //     ]
        //   },
        // ]
      }
    },
    props: ['suspectId','name'],
    components: {
      Tools,
      Suspect1,
      Suspect2,
      Suspect3,
      Suspect4,
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
      },
      phrases() {
        return data[this.id].suspects.phrases;
      },
      count() {
      return audioCount.value();
      },
      lostGame() {
        // if (localStorage.getItem('audio') < 0) {
        //   $router.push({ path : 'loose'});
        // }

        if (audioCount.value() < 0) {
          this.$router.push({name: 'loose'});
          //return true;
        }
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

        // Show phrases
        
        document.querySelector('.show-text').innerHTML = this.suspects[this.textCount]['phrases'][this.textCount];
        // //let memo = i;
        this.textCount++;

         if(this.textCount >= this.suspects[this.textCount]['phrases'].length) {
              //document.getElementById("demo").innerHTML = phrases[0]; 
            this.textCount = 0;
          }

      },
      // lostGame() {
      //   // if (localStorage.getItem('audio') < 0) {
      //   //   console.log('perdu');
      //   //   $router.push({ path : 'loose'});
      //   // }

      //   if (this.count < 0) {
      //     //this.$router.push({name: 'loose'});
      //     return false;
      //   } else {
      //     return true;
      //   }
      // }
      // count() {
      //   return audioCount.value();
      // }
      toParent(message){
        this.msg = message;
      }

    }
}
</script>