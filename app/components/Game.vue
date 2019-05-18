<template>
  <div class="big-header">
    <h1>Niveau {{ id }} - {{ title }}</h1>
    <!-- <h1>{{ subtitle }}</h1> -->
    <br />
    <div 
      v-for="(suspect, i) in suspects" :key="i" class="button" @click="handleAudio">
        {{ suspect.name }} - {{ suspect.phrases.length }}
    </div>
    <p class="show-text">hello</p>
    <!-- <h2 v-for="(phrase , index) in phrases"></h2> -->
    <!-- <router-link 
      class="button" 
      :to="'/game/' + goto">
      Niveau suivant
    </router-link> -->
    <router-link 
      class="button" 
      :to="'/answer/' + id">
      Répondre
    </router-link>

    <p>{{count}}</p>
  </div>
</template>

<script>
import data from '../assets/data.json';
import audioCount from '../services/audioCount';



export default {
    data() {
      return {
        
        count : audioCount.value(),
        
      }
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

      initZero() {
        return i = 0;
      },
      
      handleAudio() {
        console.log('Compte bordel');
        audioCount.decrement();

        let i = this.id;
        i = 0;  
        document.querySelector('.show-text').innerHTML = this.suspects[i]['phrases'][i];
        //let memo = i;
        i++;
        
      }
    }
}
</script>