<template>
  <div class="form-panel">
    <h4>Firebase Credentials:</h4>
    <div class="form-panel">
      <label for="username">Username:</label>
      <input type="text" id="username">
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password">
      <br>
      <input type="checkbox" id="checkbox">
      <label for="checkbox">Use default values?</label>
      <br>
      <button>Get Token</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Firebase',
};
</script>

<style scoped>

</style>
