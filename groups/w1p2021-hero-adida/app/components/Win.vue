<template>
<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
  <div class="big-header page">
    <div class="center"></div>
    <h1 style="font-size: 40px; color:#14133f;border:2px solid black; background-color: white;">{{message}}</h1>
     <div v-if="perso == 'kombouare'" style="display: flex;flex-direction: column;align-items: center; color:#14133f; border:2px solid black;background-color: white;text-align: center;">
     <img src="../assets/images/maintien.jpg" style="position: fixed; min-width: 100%; min-height:100%; z-index:-1; bottom:0; left:0;">
     <p style="font-size: 40px;">QUELLE FIN DE SAISON ET QUELLE JOIE POUR CETTE EQUIPE</p>
     <p>Votre equipe est maintenue en premiere divison.</p>
       <p>Vous terminez avec {{reput}} points de reputation et {{mentale}} points de mental</p>
   </div>
     <div v-else-if="perso == 'klopp'" style="display: flex;flex-direction: column;align-items: center; color:#14133f; border:2px solid black; background-color: white;text-align: center;">
     <img src="../assets/images/winners.jpg" style="position: fixed; min-width: 100%; min-height:100%; z-index:-1; bottom:0; left:0;">
     <p style="font-size: 40px;">QUELLE JOIE POUR LES JOUEURS ET LES SUPPORTERS</p>
     <p style="font-size: 40px;">Votre equipe a gagner la final  </p>
    <p>Vous terminez avec {{reput}} points de reputation et {{mentale}} points de mental</p>
   </div>
     <div v-else-if="perso == 'zidane'" style="display: flex;flex-direction: column;align-items: center; color:#14133f; border:2px solid black; background-color: white;text-align: center;">
     <img src="../assets/images/winners.jpg" style="position: fixed; min-width: 100%; min-height:100%; z-index:-1; bottom:0; left:0;">
     <p style="font-size: 40px;">QUELLE JOIE POUR LES JOUEURS ET LES SUPPORTERS</p>
     <p style="font-size: 40px;">Votre equipe a gagner la final  </p>  
            <p>Vous terminez avec {{reput}} points de reputation et {{mentale}} points de mental</p>

   </div>
    <router-link class="button" to="/home">Go to Home</router-link>
  </div>
</transition>
</template>

<script>
export default {
    data() {
      return {
        message : "LA VICTOIRE",
        audio: false,
        perso: localStorage.getItem('character'),
        mentale : localStorage.getItem('Mentalite'),
        reput : localStorage.getItem('points')
      }  
    },
    methods: {
        myAudio() {
     this.audio = true;
    },
    notAudio() {
      this.audio = false;
    },
    enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})
			
			tl.set(el, {
				autoAlpha: 0,
				rotationX: 90,
				transformOrigin: '50% 50%'
			})
			
			tl.to(el, 1, {
				autoAlpha: 1,
				rotationX: 0,
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

