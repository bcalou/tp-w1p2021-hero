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

  <section class="suspects">
    <Suspect1></Suspect1>
    <Suspect2></Suspect2>
    <Suspect3></Suspect3>
    <Suspect4></Suspect4>
  </section>
    
    <router-link 
      class="button button__bedroom" 
      to="/bedroom">
      Aller à la chambre
    </router-link>

    <p class="showText"></p>
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
  .suspects {
    display: flex;
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
        count : audioCount.value(),
        textCount: 0
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
    props: ['suspectId','name','text'],
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
        // if (localStorage.getItem('audio') < 0) {
        //   console.log('perdu');
        //   $router.push({ path : 'loose'});
        // }

        if (this.count < 0) {
          console.log('perdu');
          this.$router.push({name: 'loose'});
        }
      }


    }
}
</script>