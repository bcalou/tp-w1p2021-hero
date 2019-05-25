<template>
<transition name="characters" appear >
  <div class="big-header">
    <h1 class="home__title">Le Mystérieux meurtre du Théâtre de l’Est</h1> 
    <img src="../assets/img/masque.png" alt="masque">
    <br />
    <h2>Avant la dernière entrée en scène de l’année, Marie, la meilleure comédienne du village à été assasiné dans sa loge. Qui à osé et pourquoi?</h2>
    <br>
    <h2>Selon vos choix de rencontre au fil du jeu vous découvrirer ou non le meutrier de votre bien-aimée.</h2>
    <router-link class="button" to="/characters">À vous de jouer</router-link>
  </div>
</transition>
</template>

 
<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Hey',
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};

</script>
<style lang="scss" scoped>
  .big-header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
.home__title {
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  margin-bottom: 2rem;
  margin-left: -9rem;
}
  
h2 {
  font-size: 1.5rem;
  width: 60rem;
   margin-top: 2rem;
}

@keyframes slidein {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

.characters-enter-active {
  animation: slidein 2s;
}
</style>
