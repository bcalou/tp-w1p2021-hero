<template>
  <transition name="scale">
  <article v-if="show" class="character" :class="{'character--main':character.main}">
    <h2 class="character__name">{{character.name}}</h2>
    <h3 class="character__speciality">{{character.speciality}}</h3>
    <br>
  </article>
  </transition>
</template>

<style lang="scss" scoped>
@import "../assets/scss/blocs/initialisation";

.character {
  transition: transform 1s;
}

/* Always activate */
.scale-enter-active {
  transform: scale(0) rotate(150deg);
}

/* Enter */
.scale-enter {
  transform: scale(0) rotate(150deg);
}

/* Load when the enter animation is load */
.scale-enter-to {
  transform: scale(2) rotate(0deg);
}

.character__name {
  font-size: 25px;
  text-align: center;
}
.character__speciality {
  font-size: 20px;
}

.character--main {
  color: red;
}
</style>


<script>
import { timeout } from "q";
export default {
  props: [`character`],
  data: () => {
    return {
      show: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 2000);
  }
};
</script>
