<template>
  <div class="application-header">
    <h2>Oauth2 Project to demonstrate how different types of OAuth2 work in real life</h2>
    <p>Oauth2 application example is configured only for localhost.</p>
    <p>If you would like to test it - you have to run it locally</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
  .application-header {
    grid-column: 1 / -1;
    grid-row: page-start / select-panel-start;
    text-decoration: underline;
    text-align: center;
  }
</style>
