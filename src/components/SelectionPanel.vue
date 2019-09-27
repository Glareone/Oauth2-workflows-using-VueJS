<template>
  <div class="selection__container">
    <router-link class="select-option" to="/google" tag="div" active-class="active" exact >Google</router-link>
    <router-link class="select-option" to="/facebook" tag="div" active-class="active" exact >Facebook</router-link>
    <router-link class="select-option" to="/paypal" tag="div" active-class="active" exact >Paypal</router-link>
    <router-link class="select-option" to="/firebase" tag="div" active-class="active" exact >Firebase</router-link>
    <router-link class="select-option" to="/linkedin" tag="div" active-class="active" exact >LinkedIn</router-link>
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

    cursor: pointer;

    border: 1px solid darkgrey;
    border-radius: var(--border-button-radius);

    padding: 10px;
    text-align: center;
    -webkit-box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
    -moz-box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
    box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
  }

  .active {
    background-color: var(--secondary-color);
  }
</style>
