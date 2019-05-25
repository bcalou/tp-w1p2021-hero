<template id="page">
  <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
    <div class="big-header page"  :key="message" v-if="isActive">
   <img src="../assets/images/bggame.jpg" style="position: fixed; width: 100%; height:100%; z-index:-1; bottom:0; left:0;">
       <img @click="notAudio()" v-if="audio" src="../assets/images/sound.svg" style="width: 50px; position:absolute; left: 3.5%; top: 5%; background-color: white;" >
    <img @click="myAudio()" v-if="!audio" src="../assets/images/noSound.svg" style="width: 50px; position:absolute; left: 3.5%; top: 5%; background-color: white;">
			<div class="center"></div>
      <div v-if="character === 'klopp'" class="entraineurs__information">
        <img :src= "characterKlopp.src" style="width: 70px; height: 70px;">
        <div>
        <p>Reputation : {{points}}</p><br><p>Mentalite : {{mental}}</p>
        </div>
      </div>
      <div v-else-if="character === 'zidane'" class="entraineurs__information">
        <img :src= "characterZidane.src" style="width: 70px; height: 70px;">
        <div>
        <p>Reputation : {{points}}</p><br><p>Mentalite : {{mental}}</p>
        </div>
      </div>
      <div v-else-if="character === 'kombouare'" class="entraineurs__information">
        <img :src= "characterKombouare.src" style="width: 70px; height: 70px;">
        <div>
        <p>Reputation : {{points}}</p><br><p>Mentalite : {{mental}}</p>
      </div> 
      </div>     
        <h1 style="font-size: 40px; color:#ffba57">{{ level.question }}</h1>
      <div class="answers">
        <div  v-for="choice in choices" v-bind:key="choice.message">
          <div v-if="character === 'klopp'" class="choice">
              <img v-bind:src = "choice.srcKlopp" :alt="choice.altSrc" style="width: 200px;" >
              <router-link  :to="choice.link"  tag="button" class="button"  v-on:click.native="handle_function_call(choice.choix)" >  {{choice.messageCtaKlopp}}  </router-link>
          </div>
          <div v-else-if="character === 'zidane'" class="choice">
              <img v-bind:src = "choice.srcZidane" :alt="choice.altSrc" style="width: 200px;" >
              <router-link  :to="choice.link" tag="button" class="button"  v-on:click.native="handle_function_call(choice.choix)" >  {{choice.messageCtaZidane}}  </router-link>
          </div>
          <div v-else-if="character === 'kombouare'" class="choice">
              <img v-bind:src = "choice.srcKombouare" :alt="choice.altSrc" style="width: 200px;" >
              <router-link  :to="choice.link" tag="button" class="button"  v-on:click.native="handle_function_call(choice.choix)" >  {{choice.messageCtaKombouare}}  </router-link>
          </div>  
    </div>
        <audio v-if="audio" src="../assets/audio/soundOne.mp3" autoplay class="audio"></audio>
  </transition>
 
</template>
<script>

import gameService from '../services/gameService';
import data from '../data.json';
export default {
  data() {
    return {
      level: data.game[this.$route.params.id],
      choices: data.game[this.$route.params.id].choices,
      characterKlopp: data.characters[0][1],
      characterZidane: data.characters[0][2],
      characterKombouare: data.characters[0][3],
      character: null,
      points: null,
      mental: null,
      isActive: true,
      step: this.getStep(),
      message: 'Everything is okay',
      audio: null,
      player: null
      
    }
  }, 
  create() {
    setTimeout(() => {
    this.player = localStorage.getItem('joueur recrute')
    if(this.player = true) {
      console.log('okay')
    }
    })
  },
  mounted()  {
    setTimeout(() => {
    this.character = localStorage.getItem('character');
    this.points = localStorage.getItem('points') 
    this.mental = localStorage.getItem('Mentalite') 
    this.audio = localStorage.getItem('audio')
    
    this.getStep();
    this.firstStep();
    }) 

    console.log(this.verfiyScore)
       
  },
  methods : { 

       myAudio() {
          this.audio = true
          document.querySelector('audio').volume = 0;
        },
        notAudio() {
          this.audio = false
            document.querySelector('audio').volume = 1;
       
        },

        decrementMax() {
          gameService.decrementMax();
        },

    incrementSave() {
      gameService.localStorageAddGet();
    },
    decrementSave() {
      gameService.localStorageRemoveGet();
    },
    removeMenta() {
      gameService.removeMental();
    },
    addMenta() {
      gameService.addMental();
    },
    addStatuMental() {
      gameService.addPlayerMental();
    },
    removeStatuMental() {
      gameService.removePlayerMental();
    },
    handle_function_call(function_name) {
       this[function_name]()
    },
    getStep() {
      localStorage.setItem('step', this.$route.params.id)
      return this.$route.params.id
    }, 
    firstStep() {
      if(this.$route.params.id == 1){
        if(this.character == 'kombouare') {
          this.ctaKombouare = true;
        } 
        else if(this.$route.params.id == 1 && this.character == 'klopp') {
          this.ctaKlopp = true;
        } 
        else if(this.$route.params.id == 1 && this.character == 'zidane') {
          this.ctaZidane = true;      
        }
      }
    },   
    	enter: function enter(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 0,
				scale: 1.5
			}, {
				autoAlpha: 1,
				scale: 1,
				transformOrigin: '50% 50%',
				ease: Power4.easeOut,
				onComplete: done
			});
		},
		leave: function leave(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 1,
				scale: 1
			}, {
				autoAlpha: 0,
				scale: 0.8,
				ease: Power4.easeOut,
				onComplete: done
			});
  },
  	enter: function enter(el, done) {
			var tl = new TimelineMax({
				onComplete: done
			});

			tl.set(el, {
				y: window.innerWidth * 1.5,
				scale: 0.8,
				transformOrigin: '50% 50%'
			});

			tl.to(el, 0.5, {
				y: 0,
				ease: Power4.easeOut
			});

			tl.to(el, 1, {
				scale: 1,
				ease: Power4.easeOut
			});
		},
		leave: function leave(el, done) {
			TweenMax.to(el, 1, {
				y: window.innerHeight * -1.5,
				ease: Power4.easeOut,
				onComplete: done
			});
    }
    
  } 
}


</script>


 <style lang="scss" scoped>

 $color1: #461467;
$color2: #ffba57;
$color3: lighten(#ff7655, 20%);
$color4: lighten(#00aca0, 10%);
$color5: #8ed3c9;
$color6: darken(#fcf5d8, 20%);




.entraineurs__information {
    display: flex;
    align-items: center;
    position:  absolute;
    justify-content: space-around;
    top: 5%;
    right: 5%;
    width: 250px;
}

.entraineurs__stat {
  display: flex;
  align-items: center;
  flex-direction: column;
  position:  absolute;
  justify-content: space-around;
  top: 5%;
  right: 5%;
  width: 250px;
}

.answers {
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  width: 100%;
}

.choice {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



</style>




















