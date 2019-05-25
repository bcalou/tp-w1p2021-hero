<template>
  <div class="big-header">
    <br />
    <div id="target">
    Bienvenue dans Delivery Space durant cette aventure vous serez confronté à plusieurs péripéties dont le lord Commander qui est à la recherche d'un alien très puissant et c'est à vous de prendre les bonnes décisions lors des ces situations, pendant l'aventure il y aura deux types de gameplays, un en immersion dans un vaisseau et l'autre vous incarnez la peau d'un personnage  faites attention au gourvernement galactique qui veut aussi avoir l'alien faites les bons choix lors de cette aventure inouîe, alors préparez-vous  et que la sauce épicée coule dans vos veines, 
    bon amusement 
    </div>
    <audio autoplay>
      <source src="/assets/images/soundSpace.mp3" type="audio/mpeg">
    </audio>
    <div class="buttons">
      <router-link class="button-pos" to="/intro1">Jouer</router-link>
    <br />
    <img src="/assets/images/title.svg" class="title"/>
    <img src="/assets/images/Block1.svg" class="block-1"/>
    <img src="/assets/images/Block2.svg" class="block-2"/>
    <img src="/assets/images/Block1.svg" class="block-3"/>
    <img src="/assets/images/pizza-4.svg" class="pizza-4"/>
    <img src="/assets/images/spaceShip.svg" class="spaceship-move"/>
    </div>

  </div>
</template>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Delivery Space'
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
