<template>
  <div class="big-header">
    <div class="text"> 
      <h1>{{ message }}</h1>
      <h1>{{ joke }}</h1>
    </div>
    <br />
    <div class="button" @click='removeItem()'> Recommencer </div>
    <audio autoplay loop>
      <source src="../assets/audio/Ambient.mp3" type="audio/mp3">
    </audio>
  </div>
</template>

<style lang="scss" scoped>

@font-face {
  font-family:"Capture it";
  src: url("../assets/fonts/Capture_it-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap');

.big-header {
  background-image: url('../assets/images/Lose26.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  background-repeat: no-repeat;

  .text {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 30px; 
    text-align: center; 
    line-height: 150%;
    margin-left: 200px; 
    margin-right: 200px; 
    border: 10px solid black;
    background: rgba(0, 0, 0, 0.56);
    border-radius: 15px 15px 15px 15px;

  }

  .button {
    font-size: 20px; 
    position : absolute; 
    letter-spacing: 2;
    text-align: center; 
    color: black;
    background: rgba(252, 252, 252, 0.5);
    border-radius: 55px;
    cursor: pointer;
    border: 8px solid rgba(0, 0, 0, 0.1);
    bottom: 60px; 
    padding: 30px 60px 30px 60px;
    opacity: 0.8; 

  }

  .button:hover {
      opacity: 1; 
      color: white; 
      background: #304040; 
    }

}
</style>


<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Vous décidez d’y aller franco. Vous courrez tout droit. Vous donnez tout, toute votre force. Vous devez sauver l’humanité...',
      joke: 'Ce qui aurait pu être possible si vous n’aviez pas rameuté tous les zombies du coin avec le bruit de vos pas. Et oui... Avec autant de bâtiments, le moindre bruit résonne.'
    };
  },

methods: {
      removeItem() {
      localStorage.removeItem('step');
      this.$router.push({path:'/'});
    }
  }
};
</script>