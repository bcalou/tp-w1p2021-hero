<template>
  <div class="home__page">
    <audio class="audio" controls autoplay > <source src="../assets/audio/musique-dhorreurflv.mp3" type="audio/mpeg"></audio>
    <h1>{{ message }}</h1>
    <router-link class="button" to="/game/0"> <button> play </button> </router-link> 
  </div>
</template>

<style scoped lang="scss" >

h1{
    font-family: 'MADE Soulmaze';
}

button{
  top: 50px;
  position: relative;
  height: 50px;
  width: 100px;
  background-color: azure;
  font-size: 18px;
  text-decoration: none;
}


.audio{
  position: absolute;
  bottom: 1000px;
}
.home__page{
  background-size: cover;
  background-image: url("../assets/image/home/test.png");
  background-repeat: no-repeat;
     background-size: 100% 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button{
   margin-top: 10vh;
}

h1{
  font-size: 68px;
  padding-top: 60vh;
  text-align: center;
  color: red;
}


</style>

<script>;


import data from '../data.js';

export default {
  data() {
    return {
      message: 'US',
      data : data, 
    };
  },
};


</script>
