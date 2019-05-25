<template>
    <div class="big-header" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <h1>{{ message }}</h1>
    <div class="characters">
        <Character  v-for="character in characters" :key="character.name" :character="character" />
    </div>
    <router-link class="button" to="/home">Retour</router-link>

  </div>
</template>

<style lang="scss" scoped>
* {
    font-family: Cinzel;
}
h1 {
    font-size: 34px;
    background-color: #00000096;
    padding: 30px;
    margin: 50px;
}
.characters {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50vw;
    height: 40vh;
    margin: 50px;
}
</style>

<script>
import Character from './Character.vue';
import data from '../data.json';
import theme from '../services/themeService';

export default {
    data () {
        return {
            message: 'Choisissez votre personnage',
            characters: data.characters,
            image: data.character.image,
            click: this.clickHandle()
        }
    },
    methods: {
        setBackground() {
          document.addEventListener('DOMContentLoaded', () => {
          let bigHeader = document.querySelector('.big-header')
          bigHeader.style.backgroundImage = 'url(' + data.home.image + ')'
          return data.home.image
      })
    },
    clickHandle() {
      theme.state !== 'playing' ? theme.play() : ''
      setTimeout(() => {
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            if(localStorage.getItem('sounds') === "on") document.querySelector('.clickSound').play();
          })
        })
      }, 200);
      return 'Hello'
    }
    },
    components: {
        Character
    },
}
</script>
