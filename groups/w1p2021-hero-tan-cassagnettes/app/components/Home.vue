<template>
  <div class="homepage">
    <!-- <img class="hostel" v-bind:src="image"> -->
    <img class="hostel" src="../assets/images/homepage.gif">
    <div class="title">
      <h1 class="titleHome">{{ message }}</h1>
      <p class="teaser">Une réunion d'amis tourne mal... l'un d'entre est eux mort. Enquêtez!</p>
    </div>
    <div class="play">
    <router-link class="button" to="/rules">Nouvelle partie</router-link>
    </div>
    <!-- <video autoplay class="video">
      <source src="">
    </video> -->

    <!-- <div class="music">
      <audio autoplay loop controls ref="audio">
        <source src="../assets/images/vuejs_projet_sound3.mp3">
      </audio>
    </div> -->
    
  <div class="music music__bedroom">
    <audio autoplay loop id="player" src="../assets/images/vuejs_projet_sound3.mp3"></audio>
  <div> 
    <button class="button button__bedroom" onclick="document.getElementById('player').play()">Sound on</button> 
    <button class="button button__bedroom" onclick="document.getElementById('player').pause()">Sound off</button> 
  </div>
  </div>

    <!-- <link rel="preload" href="../assets/images/homepage.gif"> -->
  </div>
</template>

<style scoped>
.homepage {
  background: black; 
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  position: absolute;
  right: 350px;
  top: 200px;
  margin: 0 auto;
}

.play {
  position: absolute;
}

.hostel {
  display: block;
  width: 100vw;
}

.titleHome {
  font-size: 30px;
  color: #A00000;
  letter-spacing: .2rem;
  margin-bottom: 10px;
  text-align: center;
}
.teaser {
  color: white;
  font-size: 12px;
  width: 600px;
  line-height: 20px;
  text-align: center;
  margin-top: 20px;
}
</style>


<script>
import audioCount from '../services/audioCount';

export default {
  data() {
    return {
      message: 'The Okura Suspects',
      //image: '../assets/images/homepage.gif'
    };
  }
};
</script>
