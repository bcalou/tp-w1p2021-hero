<template>
<transition name="characters" appear >
  <div class="lose">
    <h1 class="lose__title">BRAVO !</h1>
    <h2 class="lose__phrase">Le tueur est bien Judith, la doublure de Marie.</h2>
    <img class="lose__gif" src="../assets/img/gagnant.gif" alt="">
  </div>
</transition>
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
  width: 40vw;
  height: 50vh;
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
