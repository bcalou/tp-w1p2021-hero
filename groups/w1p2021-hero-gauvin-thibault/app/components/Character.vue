<template>
  <article @click="characterChoice(character.name)">
    <h2>{{ character.name }} </h2>
    <p >{{ character.description }}</p>
    <img :src="character.image" alt="">
    <div class="test">Je choisis celui-ci</div>

  </article>
  
</template>

<style lang="scss">
article {
  h2 {
  text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 50px;
    line-height: 180%;
  }

  h3 {
    text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 20px;
    line-height: 180%;
  }
  .test {
    text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 20px;
    line-height: 180%;
  }
  img{
    cursor: pointer;
  }
  div{
    cursor: pointer;
  }
}
</style>


<script>
import router from '../router.js';
import character from '../services/characterService.js';
import itemsService from "../services/itemsService.js";



export default {
    props: ['character'],
    methods: {
        characterChoice(name) {
            character.choose(name)
            router.push('/game/14')
            itemsService.initialisation()
        }
    }
}
</script>
