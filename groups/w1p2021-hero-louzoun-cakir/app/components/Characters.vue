<template>
<div>
<h1 class="home__text">Choisir votre personnage</h1>
  <div class="wrapper">
    <router-link to="/game/1">
      <img class="sprites" src="../assets/images/sprites/Gon.png">
    </router-link>
    <router-link to="/game/3">
      <img class="sprites" src="../assets/images/sprites/Kirua.png">
    </router-link>
    <div class="name">
    <img class="user" src="../assets/images/sprites/User.png">
      <input v-model="name" v-on:keyup.enter="registerName" placeholder="Entrez votre nom">
      </div>
    <router-link to="/game/3">
      <img class="sprites" src="../assets/images/sprites/Kurapika.png">
    </router-link>
    <router-link to="/game/3">
      <img class="sprites" src="../assets/images/sprites/Leolio.png">
    </router-link>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: ""
      };
    },
    methods: {
      registerName() {
        localStorage.setItem('playerName', this.name)
        window.location.href = '/intro'
      }
    }
  };

</script>