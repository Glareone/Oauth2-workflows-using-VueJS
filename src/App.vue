<template>
  <div id="app">
    <div class="page">
      <app-header/>
      <router-view/>
      <transition name="fade" mode="out-in">
        <router-view name="route-form" key="forms"/>
      </transition>
      <router-view name="route-information-block" key="info"/>
      <app-logging/>
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
};
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  :root {
    --grid-gap: 1rem;
    --padding: 1.5rem;
    --border-button-radius: 4rem;
    --block-radius: 1rem;
    --box-shadow-color: rgba(153, 153, 153, .8);

    --main-color: #626d71;
    --main-element-color: #cdcdc0;
    --secondary-color: #DDBC95;
    --tertiary-color: #B38867;
    --text-color: #2c3e50;
    --border-color: darkgrey;

    word-break: break-all;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
    background-color: var(--main-color);

    display: grid;
    grid-template-columns: minmax(min-content, 90%);
    justify-content: center;
    min-height: 100vh;
  }

  .page {
    display: grid;
    padding: var(--padding);
    min-height: 90vh;
    align-self: center;

    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--grid-gap);
    grid-template-rows:
      [page-start] max-content
      [select-panel-start] minmax(10vh, min-content)
      [form-start] minmax(20vh, min-content)
      [logging-start] minmax(20vh, 1fr) [page-end];
  }

  .form-panel {
    background-color: var(--main-element-color);
    grid-column: 1 / 3;
    grid-row: form-start / logging-start;
    padding: 1rem;
    border-radius: var(--block-radius);
    border: 1px solid var(--border-color);
    -webkit-box-shadow: 3px 2px 6px 0 var(--box-shadow-color);
    -moz-box-shadow: 3px 2px 6px 0 var(--box-shadow-color);
    box-shadow: 3px 2px 6px 0 var(--box-shadow-color);

    button {
      border: 1px solid var(--border-color);
      border-radius: var(--border-button-radius);
      padding: 10px 20px;
      font: inherit;
      cursor: pointer;

      &:hover,
      &:active {
        background-color: var(--secondary-color);
      }

      &[class="disabled"],
      &[class="disabled"]:hover,
      &[class="disabled"]:active {
        border: 1px solid var(--tertiary-color);
        background-color: transparent;
        cursor: not-allowed;
      }
    }
  }

  /* FOR fade and slide transitions in a DOM (name) */
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: 0.5s;
  }
</style>
