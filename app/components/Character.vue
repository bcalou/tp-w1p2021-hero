<template>
    <transition name="scale">
        <article v-if="show" class="character" :class="{'character--main':character.main}">
        <h2 class="character__name">{{character.name}}</h2>
        <h3 class="character__speciality">{{ character.speciality}}</h3>
        </article>
    </transition>
</template>

<style scoped >

    .scale-enter-active {
        transition: transform 3s;
    }

    .scale-enter {
        transform: scale(0) rotate(180deg);
    }

    .scale-enter-to {
        transform: scale(2) rotate(-270deg);
    }

    .character--main{
        background-color: rgb(150, 150, 47);
        border: 3px solid white;
        margin: 20px;
    }

    h2 {
        font-size: 28px;
        font-weight: bold;
        
    }
    h3 {
        text-decoration: underline;
        font-size: 28px;
    }
</style>

<script>
export default {
    props: ['character'],
    data: function() {
        return {
              show: false
        }
    },
    mounted() {
        setTimeout(()=> {
            this.show = true
        }, 2000)
    }
};
</script>
