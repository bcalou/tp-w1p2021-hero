<template>
  <div class="big-header">
    <h1>Frame 1</h1>
    <br>

    
    <form action="/action_page.php">
      Name
      <input type="text" name="firstname" value="Mickey">
    </form>

    <router-link class="button" to="/frame__2">Go to Home</router-link>
  </div>
</template>

<script>
export default {};
</script>
