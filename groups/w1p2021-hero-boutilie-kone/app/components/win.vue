<template>
  <div class="big-header" >
    <h1 class="lose"> Win </h1>
    <router-link class="button" to="/home"> <button> Recommencer  </button> </router-link> 
</template>

<style  lang="scss" scoped >

.big-header{
  background-image: url(../assets/image/steps/win.jpg);
  background-repeat: no-repeat;
     background-size: 100% 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button{
  top: 50px;
  position: relative;
  height: 50px;
  width: 200px;
  background-color: azure;
  font-size: 18px;
  text-decoration: none;
}


h1{
  color: rgb(255, 255, 255);
  font-size: 48px;
}

</style>



<script>


import parti from '../data.js';
export default {

  data() {
    return {
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
          console.log(element)
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
      if ( this.step.links[i] === '/lose') {
              this.$router.replace(`${this.step.links[i]}`);
      }else{
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
      }, 50 );
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
      this.theTime = -100 ;
      this.choice = this.getChoice();
      this.isChoice = false ;
      this.theLink = this.getlink(),
      this.step = this.getSetp();
    }
  }
};
</script>
