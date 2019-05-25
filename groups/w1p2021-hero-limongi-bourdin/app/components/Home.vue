<template>
  <div class="menu">
    <div class="content-home">
      <h1>{{ messageA }}</h1>
      <br><br>
      <span>{{ messageB }}</span>
      <br>
      <br />
        <router-link class="button" to="/character">Choix des personnages</router-link>
    </div>
  </div>
</template>

<style>
  .menu {
    background: url('../assets/images/manoir.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;

    color: white;
  }

  .content-home {
    width: 60vw;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .content-home h1 {
    font-size: 20px;
  }

  .content-home span {
    font-size: 18px;
    line-height: 130%;
    text-align: center;
  }

  h2 {
    color: red;
  }

  h1 {
    background-color: black;
  }

</style>

<script>
export default {
  data() {
    return {
      messageA: 'Zombie Mansion',
      messageB: "Zombie mansion est un jeu où votre personnage sera plongé dans l'épouvante. Quelque soit le personnage que vous choisirez vous devrez traverser de multiples épreuves afin de compléter vos objectifs respectifs. Mais attention le moindre faux pas vous coûtera la vie."
    };
  }
};
</script>

