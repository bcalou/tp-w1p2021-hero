<template>
  <div class="container" v-on:click="handleClick()"> 
    <article class="charac"> 
      <transition name="characs" appear>
        <img class="charac__img" :src="character.picture">
      </transition>
      <h2 class="characs charac__name">{{ character.name }}</h2>
      <h3 class="characs charac__speciality">{{ character.speciality }}</h3>
    </article>
  <div>
</template>

<script>
export default {
  props: ['character'],
  methods: {
    handleClick() {

      console.log(this.character);
      if(this.character.name === "INDIANA JONES"){
        localStorage.setItem('speciality', 'The Explorer')
      }
      if(this.character.name === "TOMB RAIDER"){
        localStorage.setItem('speciality', 'The Fighter')
      }
    }
  } 
}
</script>

<style>
.charac {
  margin: 7rem 10rem;
  color: white; 
}

h2 {
  letter-spacing: 0.2rem;
}

.characs {
  margin-top: 1rem;
}

.charac__img {
  filter: drop-shadow(0 0 1rem white);
  height: 15rem;
  transition: transform .2s;
}

.charac__img:hover {
  transform: scale(1.3)
}

.characs-enter-active, .characs-leave-active {
    animation: mover 0.8s infinite alternate;
}

.characs-enter, .characs-leave-to {
    animation: mover 0.8s infinite alternate;
}

@keyframes mover {
    0% { transform: translateX(0); }
    100% { transform: translateX(-15px); }
}
</style>
