<template>
  <div class="selection__container">
    <div class="select-option">Google</div>
    <div class="select-option">Facebook</div>
    <div class="select-option">Paypal</div>
    <div class="select-option">Firebase</div>
    <div class="select-option">LinkedIn</div>
  </div>
</template>

<script>
  export default {
    name: 'SelectionPanel'
  }
</script>

<style scoped>
  .selection__container {
    grid-column: 1 / 3;
    grid-row: select-panel-start / form-start;
    padding: var(--padding);

    display: grid;
    grid-template-columns: repeat(5, minmax(min-content, 1fr));
    grid-gap: 1.5rem;
  }

  .select-option {
    background-color: var(--main-element-color);

    border: 1px solid darkgrey;
    border-radius: var(--border-button-radius);

    padding: 10px;
    text-align: center;
    -webkit-box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
    -moz-box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
    box-shadow: 6px 6px 10px 0 var(--box-shadow-color);

    &:hover {
      background-color: #2c3e50;
    }
  }
</style>
