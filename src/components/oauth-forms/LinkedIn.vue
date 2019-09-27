<template>
  <div class="form-panel">
    <h4>LinkedIn Credentials:</h4>
    <div class="form-panel">
      <label for="username">Username:</label>
      <input id="username" type="text">
      <br>
      <label for="password">Password:</label>
      <input id="password" type="password">
      <br>
      <input type="checkbox" id="use-default">
      <label for="use-default">Use default values?</label>
      <br>
      <button>Get Code</button>
      <br>
      <button>Get Token</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkedIn',
};
</script>

<style scoped>

</style>
