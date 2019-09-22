<template>
  <div id="app">
    <div class="page">
      <app-header />
      <app-selection-panel />
      <app-form/>
      <app-information-block/>
      <app-logging/>
    </div>
  </div>
</template>

<script>
  import Header from './page-components/Header.vue';

  import Form from './components/Form.vue';
  import InformationBlock from './components/InformationBlock.vue';
  import Logging from './components/Logging.vue';
  import SelectionPanel from './components/SelectionPanel.vue';

  export default {
    components: {
      appHeader: Header,
      appForm: Form,
      appInformationBlock: InformationBlock,
      appLogging: Logging,
      appSelectionPanel: SelectionPanel,
    }
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
    position: relative;
  }

  .page {
    display: grid;
    padding: var(--padding);
    min-height: 90vh;
    align-self: center;

    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--grid-gap);
    grid-template-rows: [page-start] 10vh [select-panel-start] 10vh [form-start] 20vh [logging-start] minmax(20vh, 1fr) [page-end];
  }

</style>
