<template>
  <div class="big-header">
    <h2>Choix du personnage</h2>
    <Character v-for="character in characters" v-bind:character="character" :key="character.name"></Character>
    <br>
    <router-link class="button" to="/">Go to home</router-link>
  </div>
</template>

<script>
import Character from "./Character";

export default {
  data: () => {
    return {
      characters: [
        {
          name: `Christina`,
          speciality: `Master of CSS`,
          main: true
        },
        {
          name: `Jean`,
          speciality: `Master of JS`
        }
      ]
    };
  },
  components: {
    Character
  }
};
</script>
