<template>
<transition name="characters" appear >
  <div>
    <audio autoplay>
      <source src="../assets/images/game-over-voice.mp3" type="audio/mpeg">
    </audio>
    <section class="titleLose">
      <h1>TU AS PERDU</h1> 
      <br>
      <br>
      <h2>{{ messageLose }}</h2>
    </section> 
    <section class="homeLink">
      <router-link class="btnWin" to="/game/1">RECOMMENCER</router-link>
      <img class="arrow" src="../assets/images/Arrow.png" alt="arrow">
    </section>
  </div>
  </transition>
</template>

<script>

export default {
  data() {
    return {
      messageLose: localStorage.getItem('endGame')
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
  .titleLose {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url('../assets/images/Intersect.png') no-repeat center #0F141F;
  }

  h1 {
    text-shadow:  -4px 0 #930000, 0 4px #930000, 4px 0 #930000, 0 -4px #930000;
    font-size: 5rem;
  }
  h2 {
    font-size: 2rem;
    color: white;
  }
</style>
