<template>
<transition name="characters" appear >
  <div class="big-header characters__container">
    <h1 class="characters__title">TU ES..</h1>

    <div class="characters__items">
      <router-link to="/game/2" class="router-link">
        <Character 
          v-for="character in characters"
          v-bind:character="character"
          v-bind:key="character.name"
        >
        </Character>
      </router-link>
    </div>
  </div>
</transition>
</template>

<script>
import Character from './Character.vue';

export default {
  data: function(){
    return{
      characters: [
        {
          name: 'JOHN',
          speciality: 'Petit ami',
          picture: "../assets/img/homme.png"
        },
        {
          name: 'HANNA',
          speciality: 'Meilleure amie',
          picture: "../assets/img/hanna.png"
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

.charachter__img {
  width: 15rem;
  height: 8rem;
  margin: 4rem 43%;
}

.characters__title {
  font-size: 4rem;
  color: white;
  font-weight: normal;
  text-align: center;
  padding-top: 6rem;
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
