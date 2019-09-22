<template>
  <div class="form-panel">
    <h3>Form:</h3>
    <input type="text">
    <input type="text">
    <label for="checkbox">Use default values?</label>
    <input type="checkbox" id="checkbox">
    <button>Get Code</button>
    <button>Get Token</button>
  </div>
</template>

<script>
  export default {
    name: 'Form'
  }
</script>

<style lang="scss" scoped>
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
