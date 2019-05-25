<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/home">Go to Home</router-link>
    <audio class="winSound"  volume="0.1" >
        <source src="../assets/sounds/win.wav" type="audio/wav">
    </audio>
  </div>
</template>

<style lang="scss" scoped>
h1 {
    font-family: 'Cinzel';
    font-size: 100px;
    margin-bottom: 20vh;
    color: black;
}
.big-header {
  background-color: gold;
}
</style>
<script>
import theme from '../services/themeService'

export default {
    data () {
        return {
            message: 'Vous avez gagné !',
            audio: this.playSound(),
            click: this.clickHandle()
        }
    },
    methods: {
        playSound() {
            document.addEventListener('DOMContentLoaded', () => {
                console.log('Sound Loaded');
                var audio = document.querySelector('.winSound');
                audio.volume = 0.1;
                return audio
            })
        },
        clickHandle() {
      theme.state !== 'playing' ? theme.play() : ''
      setTimeout(() => {
        let toDelete = document.querySelector('audio.active');
        toDelete ? document.body.removeChild(toDelete) : ''
        if(localStorage.getItem('music') === "on") {
          let audio = document.querySelector('.winSound')
          audio.play();
        }
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            if(localStorage.getItem('sounds') === "on") document.querySelector('.clickSound').play();
          })
        })
      }, 200);
      return 'Hello'
    }
    }
}
</script>
