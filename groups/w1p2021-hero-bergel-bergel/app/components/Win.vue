<template>
<transition name="characters" appear >
  <div>
    <audio autoplay>
      <source src="../assets/images/winner-sound-effect.mp3" type="audio/mpeg">
    </audio>
    <section class="titleLose">
      <h2>Bravo, l'éclair a réactivé le pouvoir du coeur de la jungle ! Tu as gagné et détruit le Dome.</h2>
      <h1>TU AS GAGNÉ</h1>
      <img class="img__cristals" src="../assets/images/cristals.png" alt="cristals">
    </section>  
    <section class="homeLink">
      <router-link class="btnWin" to="/characters">RECOMMENCER</router-link>
      <img class="arrow" src="../assets/images/Arrow.png" alt="arrow">
    </section>    
  </div>
</transition>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  

  .titleLose {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url('../assets/images/Intersect.png') no-repeat center #0F141F;
  }

  h1 {
    text-shadow:  -4px 0 #E8CA24, 0 4px #E8CA24, 4px 0 #E8CA24, 0 -4px #E8CA24;
    font-size: 5rem;
    position: absolute;
  }

  h2 {
    font-size: 1.5rem;
    color: white;
    position: absolute;
    top: 5rem;
    background-color: #0F141F;
  }

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

.img__cristals {
    transition-duration: 0.3s;
    transition-property: transform;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transform: translateY(-6px);
    animation-name: hover;
    animation-duration: 1.5s;
    animation-delay: 0.3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    &:before{
      pointer-events: none;
      position: absolute;
      z-index: -1;
      content: '';
      top: 100%;
      left: 5%;
      height: 10px;
      width: 90%;
      opacity: 0;
      background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
      transition-duration: 0.3s;
      transition-property: transform, opacity;
      opacity: .4;
      transform: translateY(8px);
      animation-name: hover-shadow;
      animation-duration: 1.5s;
      animation-delay: .3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
  
  @keyframes hover {
    50% {
      transform: translateY(-3px);
    }
  
    100% {
      transform: translateY(-6px);
    }
  }
  
  @keyframes hover-shadow {
    0% {
      transform: translateY(6px);
      opacity: .4;
    }
  
    50% {
      transform: translateY(3px);
      opacity: 1;
    }
  
    100% {
      transform: translateY(6px);
      opacity: .4;
    }
  }

</style>
