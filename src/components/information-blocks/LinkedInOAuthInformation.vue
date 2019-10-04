<template>
  <div>
    <p><b>Current LinkedIn Code</b>: {{ linkedInCode }}</p>
    <p><b>Current LinkedIn Token</b>: {{ linkedInToken }}</p>
    <p><b>1.</b> Get Code ("GET" Request). To Get Code you must compose url and redirect to </p>
    <p><b>Code Endpoint Prototype</b>: </p>
    <p><b>Complete Code Endpoint Example </b>: </p>
    <p><b>2.</b> Get Token ("POST" Request). To Get Token you must compose url and make a call to </p>
    <p><b>Token Endpoint Prototype</b>: </p>
    <p><b>Complete Token Endpoint Example</b>: </p>
  </div>
</template>

<script>
export default {
  name: 'LinkedInOAuthInformation',
  computed: {
    linkedInCode() {
      return this.$store.getters.linkedInCode;
    },
    linkedInToken() {
      return this.$store.getters.linkedInToken;
    },
  },
};
</script>

<style scoped>

</style>
