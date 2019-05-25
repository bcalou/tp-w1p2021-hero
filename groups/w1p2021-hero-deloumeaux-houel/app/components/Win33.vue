<template>
  <div class="big-header">
    <div class="text"> 
      <h1>{{ message }}</h1>
      <h1>{{ joke }}</h1>
    </div>
    <br />
    <div class="button" @click='removeItem()'> Recommencer </div>
      <audio autoplay loop>
        <source src="../assets/audio/ApplauseWin.mp3" type="audio/mp3">
      </audio>
      <img class="gif" src='../assets/gif/Victory33.gif'> 
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
  background-image: url('../assets/images/Win33.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  background-repeat: no-repeat;
  
  .gif {
    position: absolute; 
    bottom: 0px; 
    z-index: 1; 

  }

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
    z-index: 2; 

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
    left: 100px; 
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

export default {
  data() {
    return {
      message: 'Grâce à vous, la population a su se relever et se reconstruire ! D’autre auraient tué pour réussir.',
      joke: 'Vous avez su garder votre honneur. Chuck Norris serait fier de vous'
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