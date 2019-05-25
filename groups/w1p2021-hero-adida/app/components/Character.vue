<template>
<transition 
		v-on:enter="enter" 
		v-on:leave="leave"
		v-bind:css="false"
		appear>
  <div class="big-header page"  > 
       <img src="../assets/images/bggame.jpg" style="position: fixed; width: 100%; height:100%; z-index:-1; bottom:0; left:0;">
    <div class="center"></div>
    <h1 style="font-size: 40px; padding: 14px; border: 3px white solid; margin-top: 50px;">{{message}}</h1>
    <div style="display: flex; flex-direction: row; justify-content:space-around; width:100vw; margin:auto;">  
           <transition name="fadeInLeftBig" appear>
          <div v-if="transition" :key="visible" class="flex-center" @click="showModalsTwo()">
              <img :src="characterKombouare.src"  :alt="characterKombouare.altSrc"  style="height: 220px;">
              <p style="font-size: 30px;">{{characterKombouare.title}} 🇫🇷</p>
        </div>
          </transition>
             <transition name="fadeInUp" appear>
          <div v-if="transition" :key="visible" class="flex-center" @click="showModalsOne()">
              <img  :src="characterKlopp.src"  :alt="characterKlopp.altSrc"  style="height: 220px;">
                <p style="font-size: 30px;">{{characterKlopp.title}} 🇩🇪</p>
        </div>
          </transition>
           <transition name="fadeInRightBig" appear >
          <div v-if="transition" :key="visible" class="flex-center" @click="showModalsThree()">
            <img :src="characterZidane.src"  :alt="characterZidane.altSrc"  style="height: 220px;">
              <p style="font-size: 30px;">{{characterZidane.title}} 🇫🇷</p>
        </div>
          </transition>
</div>  
<transition name="modal">
  <div v-if="showModalOne" style="position: absolute;" id="modal-template" class="modal" >
        <p>{{characterKlopp.description}}</p>
      <img :src="characterKlopp.closeSvg" style="width: 40px; height:40px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModalOne = false">
    <router-link class="button" tag="button" to="game/1" @click.native="saveCharacterKlopp()"> {{characterKlopp.cta}} </router-link>
  </div> 
   <div v-if="showModalTwo" style="position: absolute;" id="modal-template" class="modal" >
     <p>{{characterKombouare.description}}</p>
      <img :src="characterKombouare.closeSvg" style="width: 40px; height:40px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModalTwo = false">
    <router-link class="button" tag="button" to="game/1" @click.native="saveCharacterKombouare()"> {{characterKombouare.cta}} </router-link>
  </div> 
   <div v-if="showModalThree" style="position: absolute;" id="modal-template" class="modal" >
         <p>{{characterZidane.description}}</p>
      <img :src="characterZidane.closeSvg" style="width: 40px; height:40px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModalThree = false">
    <router-link class="button"  tag="button" to="game/1" @click.native="saveCharacterZidane()"> {{characterZidane.cta}} </router-link>
  </div> 
</transition>
<transition>
</template>
<script>


import gameService from '../services/gameService';
import data from '../data.json';
    export default {
    data () {
        return {
            visible: true,
            audio: false,
            transition: true,
            showModalOne: false,
            showModalTwo: false,
            showModalThree: false,
            message : "Choisissez votre Entraineur ",
            characterKlopp: data.characters[0][1],
            characterZidane: data.characters[0][2],
            characterKombouare: data.characters[0][3],            
            newNumber: null,
        }        
    },

  mounted() {
    localStorage.clear();
    
},
  
  methods : {
        showModalsOne() {
          this.showModalOne = true;
        },
         showModalsTwo() {
          this.showModalTwo = true;
        },
        showModalsThree() {
          this.showModalThree = true;
        },
        saveCharacterZidane() {
        localStorage.setItem('character', 'zidane'); 
        localStorage.setItem('points', 110);
        localStorage.setItem('Mentalite', 75)
        }, 
        saveCharacterKombouare() {
        localStorage.setItem('character', 'kombouare');  
        localStorage.setItem('points', 87)
        localStorage.setItem('Mentalite', 62)
        },
        saveCharacterKlopp () {
        localStorage.setItem('character', 'klopp')
        localStorage.setItem('points', 102)
        localStorage.setItem('Mentalite', 83)
        },
        enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})
			
			tl.set(el, {
				autoAlpha: 0,
				scale: 2,
				transformOrigin: '50% 50%'
			})
			
			tl.to(el, 1, {
				autoAlpha: 1,
				scale: 1,
				ease: Power4.easeOut
			})
		},
		leave(el, done) {
			TweenMax.to(el, 1, {
				scale: 0,
				ease: Power4.easeOut,
				onComplete: done
			});
		}	

  }
    }

</script>
<style <style lang="scss" scoped>

.active-animation {
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translate(-50%, 0);
}

.page {
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;

	
	.center {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		font-size: 3rem;
		text-align: center;
  }
}



.rotate-enter-active {
  animation: rotateIn 1s;
}


.modal-leave-active {
  animation: fadeOut 1s;
}


@keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.fadeInUp-enter-active, .fadeInUp-enter {
animation: fadeInUpBig 1.3s;
}

.fadeInLeftBig-enter-active, .fadeInLeftBig-enter {
  animation: fadeInLeftBig 1.3s;
}

.fadeInRightBig-enter-active, .fadeInRightBig-enter {
  animation: fadeInRightBig 1.3s;
}

@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}


</style>




