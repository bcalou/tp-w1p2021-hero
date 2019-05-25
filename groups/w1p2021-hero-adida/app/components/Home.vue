<template>

  <div class="big-headerr">
    <h1 style="font-size: 100px; word-spacing: 50px;" >{{message}}</h1>
<div style="border: 1px solid white; margin:30px; padding:30px; width: 555px;line-height: 30px;">
  <h2>Bienvenue sur ULTIMATE MANAGEMENT 19'  </h2>
 <p>Votre but est de faire les meilleurs choix possibles afin de gagner le dernier match de la saison qui sera decisif. Durant cette partie et en fonction du coach choisis vous aurez un nombre de points qui represente votre reptutation et votre mentalite de groupe. Si jamais un des deux tombe en dessous de 70 vous aurez perdu et pas fait le travail ncessaire pour mener a bien votre equipe dans cette quete </p>
</div>
    <transition-group name="play" appear :duration="100000" >
    <router-link :key="message" class="button" to="/character" > {{button}} </router-link>

   <router-link :key="button" :to="'/game/' + step" class="button">Reprendre ma partie</router-link>
    </transition-group>
    
    <video autoplay muted id="myVideo">
  <source src="../assets/audio/trailer.mp4" type="video/mp4">
</video>

  </div>
 
</template>

<script>
import game from '../services/gameService'
export default {
  data() {
    return {
      audio: false,
      message: 'ULTIMATE MANAGEMENT 19',
      button: 'CLICKER POUR JOUER',
      step: localStorage.getItem('step')
    }
  }
}




</script>
<style>

#myVideo {
  position: fixed;
  z-index: -1;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}




.big-headerr {

  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: white;

}













</style>
