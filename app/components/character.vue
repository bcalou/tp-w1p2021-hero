<template>
  <div class="big-header">
    <h1>Page</h1>
    <h1>{{ message }}</h1>
    <h1>Previous clicks {{ course }}</h1>
    <div>
    <div/>
    <br />
    <transition name="fade">
     
      <router-link class="button" to="/game/1">Go to Home</router-link>
     </transition>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
</style>

<script>
import countService from '../json/countServices';

export default {
  data() {
    return {
      course: countService.value()
    };
  }
};
</script>
