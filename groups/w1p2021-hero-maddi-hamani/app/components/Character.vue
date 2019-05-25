<template>
  <div class="container" v-on:click="handleClick()"> 
    <article class="charac"> 
        <img class="charac__img" :src="character.picture">
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
      if(this.character.name === "JOHN"){
        localStorage.setItem('speciality', 'Petit ami')
      }
      if(this.character.name === "HANNA"){
        localStorage.setItem('speciality', 'Meilleure amie')
      }
    }
  } 
}
</script>

<style>
.charac {
  margin: 7rem 10rem;
  color: white; 
  font-size: 1.3rem;
}

h2 {
  letter-spacing: 0.2rem;
}

.characs {
  margin-top: 1rem;
}

.charac__img {
  filter: drop-shadow(0 0 0.6rem white);
  height: 15rem;
  transition: transform .2s;
  margin-top: 4rem;
}

.charac__img:hover {
  transform: scale(1.3)
}
</style>
