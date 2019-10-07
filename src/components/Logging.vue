<template>
  <div class="logging">
    <h3>Logging:</h3>
    <p>Unfortunately, Logging Page is abandoned.</p>
  </div>
</template>

<script>
export default {
  name: 'Logging',
};
</script>

<style lang="scss" scoped>
.logging {
  grid-column: 1 / 3;
  grid-row: logging-start / -1;

  background-color: var(--main-element-color);
  padding: 1rem;
  border-radius: var(--block-radius);
  border: 1px solid var(--border-color);
  -webkit-box-shadow: 3px 2px 6px 0 var(--box-shadow-color);
  -moz-box-shadow: 3px 2px 6px 0 var(--box-shadow-color);
  box-shadow: 3px 2px 6px 0 var(--box-shadow-color);
}
</style>
