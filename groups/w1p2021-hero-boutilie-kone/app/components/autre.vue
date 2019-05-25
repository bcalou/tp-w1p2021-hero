<template>
  <div class="big-header">
   
  </div>
</template>

<style  lang="scss" scoped >
.big-header{
    color: white;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: black;
}
.description{
    text-align: center;
    padding-top: 30vh;
    padding-bottom: 50px;
    font-size: 18px;
    p{
      width: 60%;
      line-height: 32px;
      margin: auto;
    }
}
.answers{
  display: flex;
  justify-content: space-around;
  height: 20px;
  width: 60vw;
  justify-items: center;
    margin: auto;
}
h2{
  text-align: center;
  padding-bottom:5vh;
}
.answer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 50%;
  margin: 0px 3px 0px 3px;
  align-items: center;
  height: 50px;
  color: white;
  border-radius: 20px;
 background-color: rgba(0, 0, 0, 0.589);
  p{
      width: 50%;
  }
}

</style>



<script>

// import parti from '../data.js';
export default {

  data() {
    return {
      character :  this.getCharacter(),
      step : this.getSetp(),
    };
  },

  methods : {
    getCharacter(){
     return parti.game[this.$route.params.character]  ;
    },

    getSetp(){
      return parti.game[this.$route.params.character][this.$route.params.step]
    },
    newPage(i){
      if ( this.step.answers[i].link === '/lose') {
              this.$router.replace(`${this.step.answers[i].link}`)
      }else{
        this.$router.push( this.step.answers[i].link )
      }
    },
    getImage(image){
     return "./test.png" ;
    }
  },

  watch: {
    '$route' (to, from) {
      this.character = this.getCharacter();
      this.step = this.getSetp();
    }
  }
};
</script>
