<template>
<transition name="characters" appear >
  <div class="rule__container">
    <img class="charachter__img" src="../assets/images/title.png" alt="title-game">
  <div class="rules__container">
    <h1>{{ message }}</h1>
    <router-link class="button" to="/game/1">PLAY</router-link>
  </div>
  </div>
</transition>
</template>

<script>

export default {
  data() {
    return {
      message: 'Bienvenue dans Under The Dome. Tu es coincé dans le Dome et le seul moyen d\'en sortir est de récupérer les 3 coeurs de la jungle. Pour cela, tu devras survivre aux 30 phases du jeu pour tous les obtenir et détruire le Dome.'
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes slidein {

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

}

.characters-enter-active {
  animation: slidein 2s;
}

.rules__container {
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


h1 {
  font-size: 1.3rem;
  width: 54rem;
  letter-spacing: 0.3rem;
  line-height: 2.5rem;
  margin-bottom: 4rem;
}

.rule__container {
  background: linear-gradient(180deg, #495B7D 0%, rgba(255, 255, 255, 0) 100%), #866466; 
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
</style>
