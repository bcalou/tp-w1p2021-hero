<template>
  <div class="game" rel="preload" v-bind:style="{ 'background': 'url('+ step.img +')' + 'no-repeat center fixed / cover', 'overflow': 'hidden' }">
  <audio autoplay loop>
      <source src="../assets/images/pluiebruit.mp3" type="audio/mpeg">
    </audio>
  <svg class="defs-svg" viewBox="0 0 2 500">
    <title>Defs</title>
    <defs>
        <path id="rain-line" fill="none" stroke-width="2" stroke="#FFFFFF"
              d="M1,0 L1,1000" stroke-linecap="round" stroke-dasharray="50 160 70 270"/>
        <pattern id="rain" width="500" height="500" patternUnits="userSpaceOnUse">
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(10 0)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(200 -200)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(350 -300)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(490 -400)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(75 -20)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(140 -120)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(270 -220)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(400 -320)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(450 -420)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(105 -180)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(165 -270)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(375 -370)"/>
            <use class="rain-line-svg" v-bind="{'xlink:href':'#rain-line'}" transform="translate(460 -500)"/>
        </pattern>
    </defs>
</svg>
    <svg class="rain-back-svg">
        <title>Rain in the back</title>
        <rect fill="url(#rain)" width="100%" height="100%"/>
    </svg>
    <div class="section__title">
      <section class="game__title">
       <h1 class="title">{{ step.title }}</h1>
    </section>
    
    </div>
   
    <ul>
      <li v-on:click="doActions(action)" 
        v-for="action in step.actions" 
        :key="action.step"
        v-show="canDoAction(action)"
      >
        <div class="actionLabel">
          <div class="button buttonL">
            {{ action.label }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import game from '../data.json';
import gameService from '../services/gameService';


export default {
  data: function() {
    return {
      step: game.steps.find(step => {
        return step.id === parseInt(this.$route.params.id)
      }),     
    }
  },
  watch: {
    '$route.params.id'(to, from) {
      this.step = this.getStep();
    },
  },
  methods: {
    getStep() {
      return game.steps.find(step => {
        return step.id === parseInt(this.$route.params.id)
      })
    },
    doActions(action) {
      if (action.to) {
        this.$router.push({params: {id: action.to}})
        document.querySelector('.game').classList.add('pane-enter-active' && 'pane-leave-active')
        setTimeout(function() {
          document.querySelector('.game').classList.remove('pane-enter-active' && 'pane-leave-active')
        }, 5000)
      }
      if (action.lose === 'Game Over') {
        localStorage.setItem('endGame', action.reason)
        this.$router.push({path: '/lose'})
      }
      if (action.win === 'You Won') {
        this.$router.push({path: '/win'})
      }
      if (action.video === 'Challenge Suivant') {
        this.$router.push({path: '/videos'})
      }
      if (action.video === 'Challenge Suivant second') {
        this.$router.push({path: '/video'})
      }
      if (action.video === 'Challenge Suivant autre') {
        this.$router.push({path: '/videoo'})
      }
      if (action.weapon) {
        gameService.weapon = action.weapon
        localStorage.setItem('weapon', action.weapon) 
      }
      if (this.step.id === 25) {
        let weapon = localStorage.getItem('weapon')
        if (weapon === 'Un pentacle') {
          this.$router.push({ path: '/game/26'})
        }
        else {
          this.$router.push({ path: '/lose'})
        }
      }
      console.log(gameService)
      
    },
    canDoAction(action) {
      if(action.onlyMan && localStorage.getItem('speciality') !== 'The Explorer') {
        return false
      }
      if(action.onlyWoman && localStorage.getItem('speciality') !== 'The Fighter') {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>

.section__title {
  display: flex;
  justify-content: center;
}

.game__title {
  background: linear-gradient(180deg, rgba(73, 91, 125, 0.795) 0%, rgba(255, 255, 255, 0) 100%), #866466c8;
  width: 50rem;
  height: 15rem;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.2rem;
}

.title {
  text-align: center;
  padding: 3rem 0;
  font-weight: 700;
  font-style: italic;
  letter-spacing: 0.2rem;
  line-height: 2rem;
  color: white;
  font-size: 1.5rem;
    transition-duration: 0.3s;
    transition-property: transform;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transform: translateY(-6px);
    animation-name: hover;
    animation-duration: 1.5s;
    animation-delay: 0.3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    &:before{
      pointer-events: none;
      position: absolute;
      z-index: -1;
      content: '';
      top: 100%;
      left: 5%;
      height: 10px;
      width: 90%;
      opacity: 0;

      transition-duration: 0.3s;
      transition-property: transform, opacity;
      opacity: .4;
      transform: translateY(8px);
      animation-name: hover-shadow;
      animation-duration: 1.5s;
      animation-delay: .3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
  
  @keyframes hover {
    50% {
      transform: translateY(-3px);
    }
  
    100% {
      transform: translateY(-6px);
    }
  }
  
  @keyframes hover-shadow {
    0% {
      transform: translateY(6px);
      opacity: .4;
    }
  
    50% {
      transform: translateY(3px);
      opacity: 1;
    }
  
    100% {
      transform: translateY(6px);
      opacity: .4;
    }
  }


  ul {
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: row;
    font-weight: 400;
    font-size: 1.2rem;
    margin: 5rem;
    letter-spacing: 0.2rem;
  }

  .actionLabel {
    margin: 28% 10rem;
  }

.buttonL {
  background-color: rgba(131, 146, 103, 0.911);
  transition: all 2ms ease-in-out ;
  border-radius: 0;

}

.buttonL:hover {
  color: #839267;
  transform: scale(1.2);
}

.defs-svg {
    position: absolute;
    width: 0;
    height: 0;
}

/*
 * Rain
 */
.rain-back-svg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .2;
}
.rain-line-svg {
    animation: rain .4s linear infinite;
}
.rain-line-svg:nth-child(3n+0) {
    stroke-opacity: .6;
    animation-duration: .5s;
}
.rain-line-svg:nth-child(3n+1) {
    stroke-opacity: .7;
}
.rain-line-svg:nth-child(3n+2) {
    stroke-opacity: .9;
    animation-duration: .3s;
}

@keyframes rain {
    100% {
        stroke-dashoffset: -550px;
    }
}

.pane-leave-active,
.pane-enter-active {
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(100vw);
    background: black;
  }
}

.pane-leave-active {
  animation: fake 0.5s;

  &::after {
    animation: slideLeave 1s;
  }
}

.pane-enter-active {
  animation: fake 2s;

  &::after {
    animation: slideEnter 0.5s ease 0.5s;
  }
}

@keyframes slideLeave {
  to {
    transform: translateX(0);
  }
}

@keyframes slideEnter {
  from {
    transform: translate(0);
  }
  to {
    transform: translateX(-100vw);
  }
}
</style>