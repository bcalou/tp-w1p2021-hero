<template>
  <div class="game">
  </div>
</template>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'HELL\'SCAPE'
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
