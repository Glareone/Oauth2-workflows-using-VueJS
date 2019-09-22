<template>
  <div class="info-block">
    <h3>Information Block</h3>
  </div>
</template>

<script>
  export default {
    name: 'InformationBlock'
  }
</script>

<style lang="scss" scoped>
.info-block {
  grid-column: 3 / 4;
  grid-row: select-panel-start / -1;

  padding: 1rem;
  border-radius: var(--block-radius);
  background-color: var(--secondary-color);
  -webkit-box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
  -moz-box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
  box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
}
</style>
