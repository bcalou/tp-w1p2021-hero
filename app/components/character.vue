<template>
  <div class="big-header">
    <h1>Page</h1>
    <h1>{{ message }}</h1>
    <div>
    <div/>
    <br />
    <transition name="fade">
     <router-link class="button" to="/game/:id">Go to Page</router-link>
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
export default {
  data() {
    return {
      visible: 'true'
    };
  }
};
</script>
