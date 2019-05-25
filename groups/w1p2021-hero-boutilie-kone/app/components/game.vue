<template>
  <div class="big-header"  v-bind:style="{ backgroundImage: 'url(' + step.background + ')' }" >
    <div class="text"> 
    <div class="timer"> </div>
    <p class="description"  v-bind:class="{ visible : !isChoice }"  >
      {{step.text}}
      </p>
      <div class="buttons" >
        <button class="button" v-for="(button , index ) in choice"  
        v-bind:class="{ visible : isChoice }" 
        v-on:click="newPage(index)"
        > {{button}} </button>
      </div>
    </div>
  </div>
</template>

<style  lang="scss" scoped >
.video{
height: 100vh;
width: 100vw;
z-index: 1;
};

.timer{
  height: 3px;
  width: 100vw;
  background-color: white;
  position: relative;
  left: -10vw;
  transform: translateX(-99vw);
  transition: 100ms;
}

.big-header{
    color: white;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: black;
}

.buttons{
  display: flex;
  width: 80vw;
  justify-content: space-around;
  margin-top: 3vw;
  button{
    display: none ;
    height: 100px;
    width: 250px;
    border-radius: 20px;
    font-size: 18px;
    &.visible{
      display: initial;
    }
  }
}



.text{
  line-height: 30px;
  position: relative;
  top: 16vw;
  width: 80%;
  height: 220px;
  background-color: rgba(0, 0, 0, 0.76);
  padding: 0px 10vw 0px 10vw;
  .description{
    margin-top: 3vw;
    display: none ;
  &.visible{
    display: block;
   }
  }

}

</style>



<script>


import parti from '../data.js';
import getTimer from '../services/countService';

export default {

  data() {
    return {
      video : true ,
      /// this step === all step ///
      step : this.getSetp(),
      /// this game === object game ///
      game : parti.game,
      /// choice ==== the choice on the game ////
      choice : this.getChoice(),
      ///// time is time of the game /////
      time : this.getTime(),
      ///// toogle classe add ///
      isChoice : false ,
      ///// the time initial //////
      theTime : -100 ,
      ///// this link ////////// 
      theLink : this.getlink(),
    };
  },

  methods : {
    getSetp(){
      let step = null ;
      parti.game.forEach(element => {
        // console.log( element.step === parti.game[this.$route.params.step] , element.step , [this.$route.params.step][0] )
        if (  element.step === [this.$route.params.step][0] ) {
          step = element ;
        }
      });
      return  step ;
    },
    
    getlink(){
      let link = null ;
      parti.game.forEach(element => {
        // console.log( element.step === parti.game[this.$route.params.step] , element.step , [this.$route.params.step][0] )
        if (  element.step === [this.$route.params.step][0] ) {
          link = element.link ;
        }
      });
      console.log(link , this.theLink )
      return  link ;
    },

    getChoice(){
      let theChoice = null ;
      parti.game.forEach(element => {
        // console.log( this.$route.params.step )
        if (  element.step === this.$route.params.step ) {
          theChoice = element.choice ;
        }
      });
      // console.log( theChoice)
      return  theChoice ;
    },
    newPage(i){
      console.log( 'ok' , this.step.links , this.$route.params.step ,  )

      if ( this.step.links[i] === '/lose' || this.step.links[i] === '/win' ) {
              this.$router.replace(`${this.step.links[i]}`);
      }else{
        // console.log( parti.game[this.$route.params.step].links[i] )
          // element
        this.$router.push( this.step.links[i] );
      }
    },
    getImage(image){
     return "./test.png" ;
    },

    getTimer(){
      let barre = document.querySelector('.timer');
      var timer = setInterval(() => {
        this.theTime++;
        barre.style.transform = `translateX(${this.theTime}vw)`
        if ( this.theTime <= -1 ) {
         }else{
           if ( this.choice && !this.isChoice ){
             this.isChoice = true;
             this.theTime = -100;
             this.getTimer();
             clearInterval( timer );
           }else{
             this.newPage(0)
           }
         }
      }, this.time );
    },

    getTime(){
      return parti.game[this.$route.params.step].time ;
    }
  },
  mounted(){
     this.getTimer()
  },

  watch: {
    '$route' (to, from) {
      this.video  = false ;
      this.theTime = -100 ;
      this.choice = this.getChoice();
      this.isChoice = false ;
      this.theLink = this.getlink(),
      this.step = this.getSetp();
    }
  }
};
</script>
