<template>
  
  <div class="big-header" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <audio src= "../assets/images/sound/cladun.mp3" autoplay></audio>
    <div class="text">
      <h1 v-if="character === 'José'"> {{ phase.José.message }}</h1>
      <h1 v-if="character === 'Joséphine'">{{ phase.Joséphine.message }}</h1>    
      <!-- <h1>{{items.sword}}</h1> -->

          <p class="button" v-for="answer in answers"
            v-bind:key="answer.message"
            v-on:click="itemChoice(answer.items, answer.link)">
            {{answer.message}}
          </p>        

      <!-- <router-link

        v-for="answer in answers"
        v-bind:key="answer.message"
        class="button"
        :to="answer.link"
      >{{answer.message}}
      </router-link> -->
    </div>

    <section class="charstat">
      <img v-if="character === 'José'" src="../assets/images/coco/Bitmap.png" alt="">
      <img v-if="character === 'Joséphine'" src="../assets/images/coco/Bitmap2.png" alt="">
      <ul class="stat">
        <li>
          <img v-if="items.sword >= 1" src="../assets/images/coco/sword.png" alt="">
          <img v-if="items.sword < 1" src="../assets/images/coco/sword_gris.png" alt="">
        </li>
        <li>
          <img v-if="items.shield >= 1" src="../assets/images/coco/shield.png" alt="">
          <img v-if="items.shield < 1" src="../assets/images/coco/shield_gris.png" alt="">
        </li>
        <li>
          <img v-if="items.thief >= 1" src="../assets/images/coco/thief.png" alt="">
          <img v-if="items.thief < 1" src="../assets/images/coco/thief_gris.png" alt="">
          
        </li>
      </ul>
    </section>

  <section class="runes">
    <ul class="rune">
      <li>
          <img v-if="items.rune1 >= 1" src="../assets/images/coco/rune1.png" alt="">
          <img v-if="items.rune1 < 1" src="../assets/images/coco/rune1_gris.png" alt="">
      </li>
      <li>
          <img v-if="items.rune2 >= 1" src="../assets/images/coco/rune2.png" alt="">
          <img v-if="items.rune2 < 1" src="../assets/images/coco/rune2_gris.png" alt="">
      </li>
      <li>
        <img v-if="items.rune3 >= 1" src="../assets/images/coco/rune3.png" alt="">
        <img v-if="items.rune3 < 1" src="../assets/images/coco/rune3_gris.png" alt="">
      </li>
      <li>
        <img v-if="items.rune4 >= 1" src="../assets/images/coco/rune4.png" alt="">
        <img v-if="items.rune4 < 1" src="../assets/images/coco/rune4_gris.png" alt="">
      </li>
    </ul>
  </section>
  <section class="money">
    <img src="../assets/images/coco/coin.png" alt="character">
    <p>{{items.money}}</p>
  </section>
  </div>
  
</template>

<style lang="scss" scoped>
.big-header {
  width: 940px;
  height: 940px;
  background-size: cover;
  position: relative;
}
.text{
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 700px;
  height: 400px;
  position: absolute;
  top: 500px;
  left: 940px;
  border: 20px solid goldenrod;
  h1{
    padding: 20px;
    line-height: 140%;
    text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 30px;
  }

}
  .charstat{
  background-color: black;
  display: flex;
  flex-direction: row;
  width: 700px;
  height: 260px;
  position: absolute;
  top: 0px;
  left: 940px;
  border: 20px solid goldenrod;
}
.stat{
  width: 440px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
}
.runes{
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 450px;
  height: 200px;
  position: absolute;
  top: 300px;
  left: 940px;
  border-left: 20px solid goldenrod;
}
.rune{
  width: 440px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
}
.text{
  .button{
    font-size: 15px;
  }
}
.money{
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  height: 200px;
  position: absolute;
  top: 300px;
  left: 1390px;
  border-left: 20px solid goldenrod;
  border-right: 20px solid goldenrod;
  p{
    text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 50px;
  }
}
</style>


<script>

import data from "../../data.json";
import itemsService from "../services/itemsService.js";
import character from '../services/characterService.js';
import step from '../services/stepService.js';



export default {
  data() {
    return {
/*    map: this.createMap(),
      images: [], 
      message: game.steps[this.$route.params.id].message,
      mage: data.game[this.$route.params.id].image,*/
      phase: data.steps[this.$route.params.id],
      answers: this.characterChoice(), //this.question.answers
      step: this.setStep(),
      character: localStorage.getItem('character'), // character.get(),
      image: data.steps[this.$route.params.id].image,
      items: itemsService.getItems(),

    }
  },
  methods: {
    
/*     createMap() {
      setTimeout(() => {
        const map = new Map(document.querySelector('.big-header'), 5, game);
        this.images = map.create(this.$route.params.id).map(image => require(image));
      }, 200);
    }, */
    deadControl() {
      let step = localStorage.getItem('step')
      let characterName = localStorage.getItem('character')
      let deadStep = data.steps.dead[this.$route.params.id]
      console.log('deadStep: ', deadStep);
      return
    },
    characterChoice() {

      let questions = data.steps[this.$route.params.id]
      let result = []
      let characterName = localStorage.getItem('character')
      if(characterName === "José"){
        questions = data.steps[this.$route.params.id].José.answers
      } else {
        questions = data.steps[this.$route.params.id].Joséphine.answers
      }
      questions.forEach(question => {
        result.push(question)

      });
      console.log(localStorage.getItem('steps'))
      if (JSON.parse(localStorage.getItem('items')).sword === 0) {

      }
      return result 
    },

    setStep() {
      step.set(this.$route.params.id)
      this.phase = this.$route.params.id
    },
    itemChoice(items, link) {
      console.log('items: ', items);
      itemsService.update(items);
      
      const futureCase = link.replace('/game/', '')
      const deaths = {
        noSword: [9, 3],
        noSwordNoShield: [15, 21], 
        oneThief: [7, 18]
      }
      const victory = {
        case: 12,
        runes: [
          'rune1',
          'rune2',
          'rune3',
          'rune4'
        ]
      }
      let isDead = false
      const parsedItems = JSON.parse(localStorage.getItem('items'))
      const itemsSword = parsedItems.sword;
      const itemsShield = parsedItems.shield;
      const itemsThief = parsedItems.thief;
      deaths.noSword.map(x => {
        if (itemsSword == 0 && x == futureCase) {
          isDead = true;
          console.warn("Et bah oui banane ! C'est pas très malin d'aller affronter des monstres sans épée !")
        }
      })
      deaths.noSwordNoShield.map(x => {
        if (itemsSword == 0 || 
            itemsShield == 0) {
              if (x == futureCase) isDeadx = true;
              console.warn("Béta ! Pour l'épée on dit trop rien mais là, sans bouclier : C'est vraiment pas très malin !")          
        }
      })
      deaths.oneThief.map(x => {
        if (itemsThief > 1 &&
            x == futureCase) {
          isDead = true;
          console.warn("Un copain c'est bien, mais tu connais le dicton : Trop bon, trop mort !")
        }
      })
      victory.runes.map(rune => {
        if (parsedItems[`${rune}`] === 1) {
          if (futureCase == victory.case) link = '/win';
          console.warn("Et bah voilà ! C'était pas compliqué ! Maintenant, rejoins la case sortie !")
        }
      })
      this.$router.push(isDead ? '/lose' : link);
    }
/*     getStep(){
      return data.steps.find(
      step => step.id === parInt(this.$route.params.id)
      )
    } */
  },
  
  watch: {
    '$route.params.id' (to, from){
      this.step = this.getStep();
    }
  }
};

</script>

