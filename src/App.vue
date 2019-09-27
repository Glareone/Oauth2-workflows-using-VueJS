<template>
  <div id="app">
    <div class="page">
      <app-header />
      <router-view />
      <router-view name="route-form" />
      <router-view name="route-information-block" />
      <app-logging />
    </div>
  </div>
</template>

<script>
  import Header from './page-components/Header.vue';
  import Logging from './components/Logging.vue';

  export default {
    components: {
      appHeader: Header,
      appLogging: Logging,
    },
  }
</script>

<style lang="scss">
  :root {
    --grid-gap: 1rem;
    --padding: 1.5rem;
    --border-button-radius: 4rem;
    --block-radius: 1rem;
    --box-shadow-color: rgba(153,153,153, .8);

    --main-color: #626d71;
    --main-element-color: #cdcdc0;
    --secondary-color: #DDBC95;
    --tertiary-color: #B38867;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: var(--main-color);

    display: grid;
    grid-template-columns: minmax(min-content, 90%);
    justify-content: center;
  }

  .page {
    display: grid;
    padding: var(--padding);
    min-height: 90vh;
    align-self: center;

    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--grid-gap);
    grid-template-rows: [page-start] minmax(max-content, 10vh)
      [select-panel-start] minmax(max-content, 10vh)
      [form-start] minmax(max-content, 20vh)
      [logging-start] minmax(20vh, 1fr)
      [page-end];
  }

  .form-panel {
    background-color: var(--main-element-color);
    grid-column: 1 / 3;
    grid-row: form-start / logging-start;
    padding: 1rem;
    border-radius: var(--block-radius);
    border: 1px solid darkgrey;
    -webkit-box-shadow: 3px 2px 6px 0 var(--box-shadow-color);
    -moz-box-shadow: 3px 2px 6px 0 var(--box-shadow-color);
    box-shadow: 3px 2px 6px 0 var(--box-shadow-color);
  }

</style>
