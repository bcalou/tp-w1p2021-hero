<template>
    
  <div class="big-header">
    <img class="name" src="../assets/images/name.svg">
    <br>
    <router-link class="button" to="/characters">Choix du personnage</router-link>
    <router-link v-if="availableGame" class="button" :to="'/game/' + getStep()">Reprendre la partie en cours</router-link>
    <video autoplay muted id="myVideo">
      <source src="../assets/images/LowPolyCastle.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style lang="scss" scoped>
.big-header {
  background: none;
}

.name {
  opacity: 0;
  margin-bottom: 20vh;
  height: 30vh;
}
.name.name-visible {
  opacity: 1;
  transition: opacity 1.7s;
}
#myVideo {
  position: fixed;
  z-index: -1;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}



</style>


<script>
import step from "../services/stepService.js";
import Sound from "../services/soundService.js";
import theme from "../services/themeService";
import data from "../data.json";

/**
 * Function to make title appear
 */
setTimeout(() => {
  let name = document.querySelector('.name')
  let video = document.querySelector('#myVideo')
  video ? video.playbackRate = 2  : ''
  setTimeout(() => {
    name ? name.classList.add('name-visible') : ''
  }, 12000);
},100)

/**
 * Link settings and sound class
*/
  let settingsBtn = document.querySelector('.settings')
  
  // Hover appear
  settingsBtn.addEventListener('mouseover', () => {
    document.querySelector('.settings').classList.add('is-open');
  })
  settingsBtn.addEventListener('mouseleave', () => {
    document.querySelector('.settings').classList.remove('is-open');
  })

  // Music button handle
  let music = document.querySelector(".settings #sound");
  let active = null
  
  if(localStorage.getItem('music') === "off") music.checked = false;
  
  music.addEventListener('click', () => {
    if (localStorage.getItem('music') === "off") {
      theme.play()
      active =  document.querySelector('audio.active');
      active ? active.play() : '';
      localStorage.setItem('music', 'on')
    } else {
      active = document.querySelector('audio.active');
      active ? active.pause(): '';
      theme.pause();
      localStorage.setItem('music', 'off')
    }
  })

  // Sound button handle
  let sound = document.querySelector('.settings #sounds')
  if(localStorage.getItem('sounds') === "off") sound.checked = false;

  sound.addEventListener('click', () => {
    if(sound.checked) {
      localStorage.setItem("sounds", "on");
    } else {
      localStorage.setItem("sounds", "off");
    }
  })

  // Theme Volume input handle
  let volume = document.querySelector(".settings #volume");
  volume.value = localStorage.getItem('volume')
  volume.addEventListener('change', () => {
    theme.setVolume(volume.value);
    localStorage.setItem('volume', volume.value);
  })
  // Events Volume input handle
  let volumeEvent = document.querySelector(".settings #volumeEvent");
  volumeEvent.value = localStorage.getItem('volumeEvent')
  volumeEvent.addEventListener('change', () => {
    let audio = document.querySelector('audio.active')
    audio.volume = volumeEvent.value;
    localStorage.setItem('volumeEvents', volumeEvent.value);
  })

export default {
  data() {
    return {
      message: "Home page",
      image: data.home.image, 
      theme: this.themeHandle(),
      click: this.clickHandle(), 
      availableGame: this.saveCheck()
    };
  },
  methods: {
    getStep() {
      return step.get();
    },
    themeHandle() {
      theme.change(data.home.music.src, data.home.music.loop)
      theme.setVolume(data.home.music.volume)
      if(localStorage.getItem('music') === "on") theme.play();
      return theme
    },
    clickHandle() {
      document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            if(localStorage.getItem('sounds') === "on") document.querySelector('.clickSound').play();
          })
        })
      })
      return 'Hello'
    }, 
    saveCheck() {
      if(localStorage.getItem('step') > 1 && localStorage.getItem('character') && localStorage.getItem('character') !== 'Default') return true
      else return false
    }
  }
};
</script>
