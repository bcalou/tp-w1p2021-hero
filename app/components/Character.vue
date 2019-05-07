<template>
  <article>
    <h2>{{character.name}}</h2>
    <h3>{{character.speciality}}</h3>
  </article>
</template>

<script>
export default {
  props: [`character`]
};
</script>
