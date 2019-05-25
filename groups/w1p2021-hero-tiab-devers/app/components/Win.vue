<template>
  <div class="win">
  <h1 class="home__title"></h1>
  <div class="home__loose home__loose--win">
    <h1 class="loose__title">Bravo vous avez accomplis vos tâches !</h1>
    <h1 class="loose__title">Installez vous et regardez nous jouer !!</h1>
    <router-link class="button" to="/game/1">Recommencer</router-link>
    <br>
    <router-link class="button" to="/home">Accueil</router-link>
  </div>
</template>

<script>
export default {

};
</script>
