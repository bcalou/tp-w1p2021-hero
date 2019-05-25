<template>
  <div class="home">
    <h1 class="home__title"></h1>
    <h2 class="home__subtitle">Select your Hero</h2>
    <div class="characters">
      <div class="characters__sexe characters__sexe--male">
        <div @click="selectedMale" v-on:dblclick="confirmation" class="characters__carrousel">
          <img class="character character__maleOne" src="../assets/img/persohomme-1.png" alt="Characters Males">
          <img class="character character__maleTwo is-hide" src="../assets/img/persohomme-2.png" alt="Characters Males">
        </div>
        <div class="characters__select">
          <div @click="changeCharactersMale" class="characters__arrow characters__arrow--left"></div>
          <p class="maleText">Homme</p>
          <div @click="changeCharactersMale" class="characters__arrow"></div>
        </div>
      </div>
      <div class="characters__sexe characters__sexe--female">
        <div @click="selectedFemale" class="characters__carrousel">
          <img class="character character__femaleOne" src="../assets/img/persofemme-1.png" alt="Characters Females">
          <img class="character character__femaleTwo is-hide" src="../assets/img/persofemme-2.png" alt="Characters Females">
        </div>
        <div class="characters__select">
          <div @click="changeCharactersFemale" v-on:dblclick="confirmation" class="characters__arrow characters__arrow--left"></div>
          <p class="femaleText">Femme</p>
          <div @click="changeCharactersFemale" class="characters__arrow"></div>
        </div>
      </div>
    </div>
    <div class="confirmation">
      <p>Est-tu sur de ton choix ?</p>

    </div>
    <router-link class="button button--back" to="/">retour</router-link>
</template>

<script>
export default {
  methods: {
    changeCharactersMale() {
      var charactersMaleOne = document.querySelector('.character__maleOne');
      var charactersMaleTwo = document.querySelector('.character__maleTwo');

      if (charactersMaleTwo.classList.contains("is-hide")) {
        charactersMaleOne.classList.add('is-hide');
        charactersMaleTwo.classList.remove('is-hide');
      } else {
        charactersMaleOne.classList.remove('is-hide');
        charactersMaleTwo.classList.add('is-hide');
      }
    },
    changeCharactersFemale() {
      var charactersFemaleOne = document.querySelector('.character__femaleOne');
      var charactersFemaleTwo = document.querySelector('.character__femaleTwo');

      if (charactersFemaleOne.classList.contains("is-hide")) {
        charactersFemaleOne.classList.remove('is-hide');
        charactersFemaleTwo.classList.add('is-hide');
      } else {
        charactersFemaleOne.classList.add('is-hide');
        charactersFemaleTwo.classList.remove('is-hide');
      }
    },
    selectedMale() {
      var female = document.querySelector('.characters__sexe--female');
      var maleText = document.querySelector('.maleText')
      var male = document.querySelector('.characters__sexe--male');
      var femaleText = document.querySelector('.femaleText')

      if (male.classList.contains('is-desactived')) {
        male.classList.remove('is-desactived');
        femaleText.classList.remove('is-selected');
        female.classList.add('is-desactived');
        maleText.classList.add('is-selected');
      } else {
        female.classList.add('is-desactived');
        maleText.classList.add('is-selected');
      }
    },
    selectedFemale() {
      var male = document.querySelector('.characters__sexe--male');
      var femaleText = document.querySelector('.femaleText')
      var female = document.querySelector('.characters__sexe--female');
      var maleText = document.querySelector('.maleText')

      if (female.classList.contains('is-desactived')) {
        female.classList.remove('is-desactived');
        maleText.classList.remove('is-selected');
        male.classList.add('is-desactived');
        femaleText.classList.add('is-selected');
      } else {
        male.classList.add('is-desactived');
        femaleText.classList.add('is-selected');
      }
    }
  }
};
</script>
