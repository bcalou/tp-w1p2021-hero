<template>
<transition 
		v-on:enter="enter" 
		v-on:leave="leave"
		v-bind:css="false"
		appear>
  <div class="big-header page">
    <div class="center"></div>
   <h1 style="font-size: 40px; color:#14133f;border:2px solid black; background-color: white;">{{message}}</h1>
   <p style="font-size: 40px;border:2px solid black; background-color: white;color:#14133f">Malheursement l'aventure s'arrete ici avec {{perso}}</p>
   <div v-if="perso == 'kombouare'" style="display: flex;flex-direction: column;align-items: center; color:#14133f; border:2px solid black;background-color: white;text-align: center;">
     <img src="../assets/images/relgation.jpeg" style="position: fixed; min-width: 100%; min-height:100%; z-index:-1; bottom:0; left:0;">
     <p style="font-size: 40px;">Cest la furie dans le stade </p>
     <p style="font-size: 40px;">Votre equipe est releguee en deuxieme divison vous avez certainement pas fait les bons choix</p>
               <p>Vous terminez avec {{pointss}} points de reputation et {{mentale}} points de mental</p>
   </div>
     <div v-else-if="perso == 'klopp'" style="display: flex;flex-direction: column;align-items: center; color:#14133f; border:2px solid black;background-color: white;text-align: center;">
     <img src="../assets/images/deception.jpg" style="position: fixed; min-width: 100%; min-height:100%; z-index:-1; bottom:0; left:0;">
     <p style="font-size: 40px;">QUELLE DECEPTION POUR LES JOUEURS ET LES SUPPORTERS</p>
     <p style="font-size: 40px;">Votre equipe a perdue la finale vous avez certainement pas fait les bons choix</p>
               <p>Vous terminez avec {{pointss}} points de reputation et {{mentale}} points de mental</p>
   </div>
      <div v-else-if="perso == 'zidane'" style="display: flex;flex-direction: column;align-items: center; color:#14133f; border:2px solid black;background-color: white;text-align: center;">
     <img src="../assets/images/deception.jpg" style="position: fixed; min-width: 100%; min-height:100%; z-index:-1; bottom:0; left:0;">
     <p style="font-size: 40px;">QUELLE DECEPTION POUR LES JOUEURS ET LES SUPPORTERS</p>
     <p style="font-size: 40px;">Votre equipe a perdue la finale vous avez certainement pas fait les bons choix</p>
            <p>Vous terminez avec {{pointss}} points de reputation et {{mentale}} points de mental</p>
   </div>
    <router-link class="button" to="/home">Go to Home</router-link>
    <router-link class="button" @click.prevent="clearScore()" to="/character">PLAY AGAIN</router-link>
  </div>
</transition>
</template>
<script>
import gameService from '../services/gameService'
export default {
    data() {
      return {
        points: gameService.value(),
        pointss: localStorage.getItem('points'),
        perso: localStorage.getItem('character'),
        mentale : localStorage.getItem('Mentalite'),
        
        message : "VOUS AVEZ PERDU !!",
        komb: require('../assets/images/relgation.jpeg')

      }
    },

  beforeCreate() {
  
  localStorage.removeItem('step');
    
},
methods: {
  enter(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 0,
				scale: 1.5,
			}, {
				autoAlpha: 1,
				scale: 1,
				transformOrigin: '50% 50%',
				ease: Power4.easeOut,
				onComplete: done
			});
		},
		leave(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 1,
				scale: 1,
			}, {
				autoAlpha: 0,
				scale: 0.8,
				ease: Power4.easeOut,
				onComplete: done
      });

    }
}
}

    

</script>

