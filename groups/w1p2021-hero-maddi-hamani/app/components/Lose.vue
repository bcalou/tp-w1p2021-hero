<template>
  <div class="lose">
    <audio autoplay loop preload="auto">
        <source src="../assets/img/music.mp3" type="audio/mpeg">
  </audio>
    <h1 class="lose__title">GAME OVER</h1>
    <h2 class="lose__phrase">Laisse la police s'en charger...</h2>
    <img class="lose__gif" src="../assets/img/giphy.gif" alt="">
  </div>

</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>

.lose {
  background: linear-gradient(180deg, #600B00 0%, #000000 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.lose__title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.lose__phrase {
  font-size: 1.5rem;
  margin-bottom: 3rem;
}

.lose__gif {
  width: 45vw;
  height: 45vh;
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
