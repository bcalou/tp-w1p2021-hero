<template>
<div class="container" @click="characterChoice(character.name)">
    <img class="character-image" :src="character.image" alt="character image">
    <h1>{{ character.name }}</h1>
    <p >{{ character.description }}</p>
  </div>
</template>
<style lang="scss" scoped>
    .character-image {
        height: 20vh;
        border: 5px solid rgb(117, 63, 0);
        cursor: url('../assets/mouse-pointer/my-mouse-pointer-hover.cur'), auto;        
    }
    h1 {
        background-color: #00000096;
        padding: 20px 40px; 
        cursor: url('../assets/mouse-pointer/my-mouse-pointer-hover.cur'), auto;        
    }
    p {
        background-color: #000000c4;
        padding: 10px;
        cursor: url('../assets/mouse-pointer/my-mouse-pointer-hover.cur'), auto;        
    }
    .container {
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 40vh;
        width: 20vw;
        cursor: url('../assets/mouse-pointer/my-mouse-pointer-hover.cur'), auto;  
        transition: all .5s;
           
        &:hover {
            transform: scale(1.1);
        }   
    }
</style>

<script>
import router from '../router.js';
import character from '../services/characterService.js';
export default {
    props: ['character'],
    methods: {
        characterChoice(name) {
            document.querySelector('.clickSound').play();
            character.choose(name)
            router.push('/game/1')
        }
    }
}
</script>