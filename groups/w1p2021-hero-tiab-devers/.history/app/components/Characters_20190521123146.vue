<template>
  <div class="home">
    <h1 class="home__title"></h1>
    <h2 class="home__subtitle">Select your Hero</h2>
    <div class="characters">
      <div class="characters__sexe">
        <div class="characters__carrousel">
          <img class="character character__maleOne" src="../assets/img/persohomme-1.png" alt="">
          <img class="character character__maleTwo" src="../assets/img/persohomme-2.png" alt="">
        </div>
        <div class="characters__select">
          <div @click="changeCharacters" class="characters__arrow characters__arrow--left characters__arrow--leftmale"></div>
          <p>Homme</p>
          <div @click="changeCharacters" class="characters__arrow characters__arrow--rightmale"></div>
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
export default {
  methods: {
    changeCharacters() {
      var arrowLeftMale = document.querySelector('div.characters__arrow--leftmale');
      var arrowRightMale = document.querySelector('div.characters__arrow--rightmale');
      var charactersMaleOne = document.querySelector('.character__maleOne');
      var charactersMaleTwo = document.querySelector('.character__maleTwo');
      console.log('PERSO 1');

      if (charactersMaleOne.classList.contains("is-hide")) {
        charactersMaleOne.classList.remove('is-hide');
        charactersMaleTwo.classList.add('is-hide');
      } else {
        charactersMaleOne.classList.add('is-hide');
        charactersMaleTwo.classList.remove('is-hide');
      }
    }
  }
};
</script>
