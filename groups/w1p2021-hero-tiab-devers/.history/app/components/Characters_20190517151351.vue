<template>
  <div class="home">
    <h1 class="home__title">{{ message }}</h1>
    <br />
    <h2 class="home__subtitle">Select your Hero</h2>
    <div class="characters">
      <div class="characters__sexe" @click="hover">
        <div class="characters__select">
          <div class="characters__arrow">G</div>
          <p>Homme</p>
          <div class="characters__arrow">D</div>
        </div>
      </div>
      <div class="characters__sexe" @click="hover">
        <div class="characters__select">
          <div class="characters__arrow">G</div>
          <p>Femme</p>
          <div class="characters__arrow">D</div>
        </div>
      </div>
    </div>
    <router-link class="button button--back" to="/">Retour</router-link>
</template>

<script>
export default {
  data() {
    return {
      message: 'HELL\'SCAPE'
    };
  },
  methods: {
    hover() {
      let element = document.querySelector('.characters__sexe');

      element.addEventListener('click', function(){
        element.classList.toggle('is-hovering');
      })
    }
  }
};
</script>
