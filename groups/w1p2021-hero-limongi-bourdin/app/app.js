import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';

new Vue({ router: router }).$mount('#root');

let mute = document.querySelector('.mute');

let sound = document.getElementById('sound');
sound.play();
sound.volume = 1;

let verify = false;

mute.addEventListener('click', function() {
  if (verify === false) {
    sound.pause()
    verify = true;
  } else if (verify === true) {
    sound.play()
    verify = false
  }
})
