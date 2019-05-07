<template>
  <div class="big-header">
    <h1>Choix du personnage</h1>
    <br>
    <router-link class="button" to="/">Go to home</router-link>

    <br>
    <!-- <Character v-bind:character="characters[0]"></Character> -->
    <br>
    <br>
    <!-- <Character v-bind:character="characters[1]"></Character> -->
    <br>
    <br>

    <Character
      v-for="character in characters"
      v-bind:character="character"
      :key="character.name"
      >

    </Character>

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
          speciality: `Master of CSS`
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
