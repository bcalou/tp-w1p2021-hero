<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/">Go to Page</router-link>
  </div>
</template>

<style lang="scss" scoped>
.big-header {
  width: 100VW;
  height: 100VH;
  background-image: url(../assets/images/coco/final.gif);
  background-size: 100% 160%;
  background-position: 50% 50%;
  position: relative;
  h1{
display: flex;
align-items: center;
justify-content: space-around;
width: 100vw;
height: 300px;
top: 0px;
position: absolute;
padding: 120px;
line-height: 140%;
text-align: center;
font-family: "Rubber Biscuit";
font-weight: bold;
color: gold;
font-size: 100px;
}
.button{
  position: absolute;
  top: 550px;
}
}
</style>

<script>
export default {
  data() {
    return {
      message: 'Vous avez gagne gros nul'
    };
  }
};
</script>
