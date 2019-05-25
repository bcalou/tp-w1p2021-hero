<template>
  <div class="big-header">
    <img class="bedroom-play" src="../assets/images/bedroom.png">
    <!-- <h1>Chambre</h1> -->
      <p class="random-image">La photo random : si tu as de la chance, tu pourras voir une photo inédite!</p>
      <p class="random-image">Sinon, c'est une photo hors sujet ou bien une photo que tu as déjà vu.</p>
    <br />
    <section class="pictures">
      <div class="picture" @click="showPicture">
        <img class="photos" v-bind:src="selectedImage"/>
      </div>
      <div class="picture">
        <img class="photos" v-bind:src="selectedImage1" @click="showPicture1"/>
      </div>
      <div class="picture">
        <img  class="photos" v-bind:src="selectedImage2" @click="showPicture2"/>
      </div>
      <div>
        <img class="photos" v-bind:src="selectedImage3" v-if="showPicturePlayer2 === true"/>
      </div>
      <div class="picture">
        <img class="photos" v-bind:src="selectedImage4" @click.once="randomImage2"/>
        
      </div>
   
       
       
    </section>
    <router-link class="button button__room" to="/game/1">Retour au <br>salon</router-link>

  
    <Tools></Tools>

     <!-- <div class="music">
      <audio autoplay loop id="player" src="../assets/images/vuejs_projet_sound3.mp3"></audio>
    <div> 
    <button class="button" onclick="document.getElementById('player').play()">Sound on</button> 
    <button class="button" onclick="document.getElementById('player').pause()">Sound off</button> 
      </div>
    </div> -->

  </div>
</template>

<style scoped>
  .pictures {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    position: absolute;
    right: 100px;
    /* border: solid 3px blue; */
  }
  .picture {
    /* border: solid 3px red; */
    background-color: yellow;
    /* width: 200px;
    height: 200px; */
  }
  .photos {
    /* //border : solid 4px black; */
    border: solid 3px white;
    width: 200px;
    height: 200px;
  }
  .button__room {
    position: absolute;
    left: 60px;
    text-align: center;
    line-height: 20px;

    background: radial-gradient(12.39px at 50% 81.51%, #FFFFFF 0%, #FFF3DB 100%), #FFF3DB;
    border: 5px solid #4B2400;
    box-sizing: border-box;
    border-radius: 13px;
    color: black;
  }
  .bedroom-play {
    display: block;
    width: 100vw;
    height: 70vh;
  }
  .music__bedroom {
  position: absolute;
  left: 0;
}
.random-image {
  width: 500px;
  font-size: 10px;
  line-height: 15px;
  
}
</style>


<script>
import data from '../assets/data.json';
import audioCount from '../services/audioCount';
import Tools from '../components/Tools.vue';
import Character from '../components/Character.vue';

export default {
    data() {
      return {
        count : 0,
        character : localStorage.getItem('character'),
        images: [
          require('../assets/images/image1.png'),
          require('../assets/images/image2.png'),
          require('../assets/images/image3.png')
        ],
        randomImages: [
          require('../assets/images/randomImage1.png'),
          require('../assets/images/randomImage2.png'),
          require('../assets/images/randomImage3.png'),
          require('../assets/images/smartphone1.png')
        ],
        selectedImage: require('../assets/images/clickPhoto.png'),
        selectedImage1: require('../assets/images/clickPhoto.png'),
        selectedImage2: require('../assets/images/clickPhoto.png'),
        selectedImage3: require('../assets/images/clickPhoto.png'),
        selectedImage4: require('../assets/images/randomImage.png')
      }
    },
    components: {
      Tools,
      Character
    },
    computed:{
      showPicturePlayer2(){
        if(this.character === 'Amanda') {
          this.selectedImage3 = this.randomImages[0];
          return true;
        }
      }
    },
    mounted() {
      if(localStorage.getItem('image1')){
          this.selectedImage = localStorage.getItem('image1');
      }
      if(localStorage.getItem('image2')){
          this.selectedImage1 = localStorage.getItem('image2');
      }
      if(localStorage.getItem('image3')){
          this.selectedImage2 = localStorage.getItem('image3');
      }
      if(localStorage.getItem('image4')) {
          this.selectedImage4 = localStorage.getItem('image4');
      }
      

    },
    methods: {

      showPicture() {
        this.selectedImage = this.images[0];
        localStorage.setItem('image1', this.selectedImage);
      },
      showPicture1() {
        this.selectedImage1 = this.images[1];
        localStorage.setItem('image2', this.selectedImage1);
      },
      showPicture2() {
        this.selectedImage2 = this.images[2];
        localStorage.setItem('image3', this.selectedImage2);
      },
      // showPicturePlayer2(){
      //   if(localStorage.getItem('character') === 'Amanda') {
      //     return true;
      //   }
      // }
      randomImage2 () {
        const idx = Math.floor(Math.random() * this.randomImages.length);
        this.selectedImage4 = this.randomImages[idx];
        localStorage.setItem('image4', this.selectedImage4);
        
      }
    }
  
  } 

</script>
