<template>
  <div class="big-header">
    <h1 class="rulesGame">Regles du jeu</h1>
    <br />
     <router-link 
      class="button button__goBackHome" 
      to='/'>
      Retour à l'accueil</router-link>

    <p>Déduction, attention, chance... seront les clés du succès! <br>
    - Débloquez les niveaux en répondant aux questions. <br>
    - Plus vous montez dans les niveaux plus c’est difficile. <br>
    - Les questions posées aux suspects sont limitées à 10 pour toute l'enquête. Sauf si ton détective dispose <br>de compétences particulières, utilise-les bien ! <br>
    - Interroger le même suspect ou pas, faites les bons choix. <br>
    - Certaines déclarations seront plus pertinentes que d’autres, quand d'autres auront l’apparence seulement d’être anodines...
    </p>

      <router-link class="button" to="/character">Passer</router-link>


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
.rulesGame {
  font-size: 20px;
  color: #A00000;
  text-transform: uppercase;
}
p {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  line-height: 32px;
}
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

export default {
  data() {
    return {
      
    }
  },
  computed: {
    
  },
  methods: {
   
  }
}
</script>
