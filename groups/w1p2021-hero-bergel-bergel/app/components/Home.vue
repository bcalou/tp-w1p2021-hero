<template>
  <div class="big-header">

    <img class="home__img" src="../assets/images/title.png" alt="title-game">
   
    <section class="home-button">
      <router-link class="button" to="/characters">START</router-link>
    </section>
    
  </div>
</template>

<style lang="scss" scoped>
.home__img {
  filter: drop-shadow(1rem 1rem 0.7rem black);
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


.home-button {
  margin-top: 15rem;
}

</style>

<script>

export default {
  
};
</script>