<template>
<transition name="characters" appear >
  <div class="characters__container">
    <img class="charachter__img" src="../assets/images/title.png" alt="title-game">

    <div class="characters__items">
      <router-link to="/game/1" class="router-link">
        <Character 
          v-for="character in characters"
          v-bind:character="character"
          v-bind:key="character.name"
        >
        </Character>
      </router-link>
    </div>
    <div class="button__container">
      <router-link class="button" to="/page">RULES</router-link>
    </div>   
  </div>
</transition>
</template>

<script>
import Character from './Character.vue'

export default {
  data: function(){
    return{
      characters: [
        {
          name: 'LUTHER X',
          speciality: 'The Explorer',
          picture: "../assets/images/player.png"
        },
        {
          name: 'TOMB RAIDER',
          speciality: 'The Fighter',
          picture: '../assets/images/tomb.png'
        }
      ]
    }
  },
  components: {
    Character
  }
};
</script>


<style>

.characters__container {
  background: linear-gradient(180deg, #495B7D 0%, rgba(255, 255, 255, 0) 100%), #866466;
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

.charachter__img {
  width: 15rem;
  height: 8rem;
  margin: 2rem 43%;
}

.charaters__title {
  font-size: 1.5rem;
  color: white;
  font-weight: normal;
  text-align: center;
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

.characters__items {
  display: flex;
  justify-content: center;
}

.button__container {
  display: flex;
  justify-content: center;
}

.router-link {
  text-decoration: none;
  display: flex;
  flex-direction: row; 
  align-items: center;
}
</style>
