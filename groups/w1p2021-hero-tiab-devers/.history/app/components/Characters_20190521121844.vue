<template>
  <div class="home">
    <h1 class="home__title"></h1>
    <h2 class="home__subtitle">Select your Hero</h2>
    <div class="characters">
      <div class="characters__sexe">
        <div class="characters__carrousel">
          <img @click="changeCharacters" class="character character__maleOne" src="../assets/img/persohomme-1.png" alt="">
          <img class="character character__maleTwo" src="../assets/img/persohomme-2.png" alt="">
        </div>
        <div class="characters__select">
          <div class="characters__arrow characters__arrow--left characters__arrow--male"></div>
          <p>Homme</p>
          <div class="characters__arrow characters__arrow--male"></div>
        </div>
      </div>
      <div class="characters__sexe">
        <div class="characters__select">
          <div class="characters__arrow characters__arrow--left"></div>
          <p>Femme</p>
          <div class="characters__arrow"></div>
        </div>
      </div>
    </div>
    <router-link class="button button--back" to="/">Retour</router-link>
</template>

<script>
// import changeCharacters from '../services/changeCharacters';
export default {
  methods: {
    changeCharacters() {
      var arrowsMale = document.querySelectorAll('div.characters__arrow--male');
      var charactersMaleOne = document.querySelector('.character__maleOne');
      var charactersMaleTwo = document.querySelector('.character__maleTwo');

      console.log('PERSO 1');
    }
  }
};
</script>
