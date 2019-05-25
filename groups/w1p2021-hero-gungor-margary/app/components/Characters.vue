<template>
  <div class="charactersMain main">
    <div>
      <h1 class="charactersContent">{{ gameChar.content }}</h1>
      <ul class="charactersList">
        <li class="characterItem" :key="character.class" v-for="character in gameChar.characters">
          <div>
            <svg v-on:click="doEffects(character)" class="characterChoice" aria-hidden="true"><use v-bind:href="`${character.svg}`"></use></svg>
          </div>
          <div class="characterLabel" v-on:click="doEffects(character)">
            {{ character.label }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import game from "../data.json";
import gameService from '../services/gameService'
export default {
  data() {
    return {
      gameService: gameService,
      gameChar: game.charactersPage
    };
  },
    mounted() {
    console.log('Mounted')
    // gameService.characterChoice = 
    // this.character = gameService.characterChoice;
  },
  methods: {
    doEffects(character) {
      this.$router.push({path: '/game/1'})

      gameService.characterChoice = character.svg;

      localStorage.setItem('character', character.svg);


      console.log(gameService.characterChoice);

      // CHARACTERS IN LOCALSTORAGE
      if (character.svg === '#parisian') {
        localStorage.setItem('asset', 'phone')
      } else if (character.svg === '#backpacker') {
        localStorage.setItem('asset', 'newspaper')
      }


      console.log(localStorage)
    }
  },
};
</script>
