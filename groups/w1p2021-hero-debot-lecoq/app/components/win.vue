<template>
  <div class="game">
    <div class="game-template">
      <div class="element">
        <h1>{{message}}</h1>
        <img src="/assets/images/planete-1.svg" class="planete-1"/>
        <img src="/assets/images/planetes-2.svg" class="planete-2"/>
        <img src="/assets/images/spaceShip.svg" class="space-ship"/>
      </div>
    </div>
    <div class="center firework"></div>
    <div class="center1 firework1"></div>
    <div class="center2 firework2"></div>
    <img src="/assets/images/volant.png" class="volant"/>
    <router-link class="button-page" to="/">Win</router-link>
    <router-link class="button-page_2" to="/">Win</router-link>
  </div>
</template>

<style lang="scss">
    .firework {
	margin: 25px auto 25px;
	width: 15px;
	height: 15px;
	border-radius: 100%;
	animation: firework ease infinite 2.5s;
}
.firework1 {
	margin: 25px auto 25px;
	width: 15px;
	height: 15px;
	border-radius: 100%;
	animation: firework ease infinite 5s;
}
.firework2 {
	margin: 25px auto 25px;
	width: 15px;
	height: 15px;
	border-radius: 100%;
	animation: firework ease infinite 2s;
}

@keyframes firework {
	0% {
		box-shadow: 
      -10px 10px white,
      10px 10px white,
      10px -10px white,
      -10px -10px white,
      
      -10px 0px white,
      10px 0px white,
      0px -10px white,
      0px 10px white;
	}
  100% {
    box-shadow: 
      -50px 50px 10px rgba(255,255,255,0),
      50px 50px 10px rgba(255,255,255,0),
      50px -50px 10px rgba(255,255,255,0),
      -50px -50px 10px rgba(255,255,255,0),
    
      -100px 0px 10px rgba(255,255,255,0),
      100px 0px 10px rgba(255,255,255,0),
      0px -100px 10px rgba(255,255,255,0),
      0px 100px 10px rgba(255,255,255,0);
  }
}

.center {
	position: absolute;
	margin: auto;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
}
.center2 {
	position: absolute;
	margin: auto;
	left: 20%;
	top: 20%;

}
.center1 {
	position: absolute;
	margin: auto;
	left: 50%;
	top: 30%;
	bottom: 0;
	right: 0;
}



    .planete-1{
        position: absolute;
        left:12em;
        top:17em;
        width: 200px;
        height: 200px;
    }
    .planete-2{
        position: absolute;
        right:12em;
        top: 17em;
        width: 200px;
        height: 200px;
    }
    .space-ship{
        position: absolute;
        left:12em;
        top: 30em;
        animation: moveSpaceShip 10s ease-in-out infinite ;

        @keyframes moveSpaceShip {
            0%{
                left: 12em;
                top: 19em;
                opacity: 0.5;
            }
            50%{
                opacity: 1;
            }
            100%{
                left: 66em;
                top: 19em;
                opacity: 0.5;
            }
        }
    }
</style>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Vous avez réussi a livrer la pizza bravo'
    };
  },
};
</script>