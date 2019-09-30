<template>
  <div>
    <p><b>Current Code</b>: {{ code }}</p>
    <p><b>Current Token</b>: {{ token }}</p>
    <p>To Sign in with Google OAuth Code Grant you need next:</p>
    <p><b>1.</b> Get Code. To Get Code you must compose url and redirect to it: https://accounts.google.com/o/oauth2/auth</p>
    <p><b>Prototype Example</b>: {{ GOOGLE_AUTHORIZATION_ENDPOINT_PROTOTYPE }}</p>
    <p><b>Complete Example</b>: {{ GOOGLE_AUTHORIZATION_ENDPOINT }} </p>
    <p><b>2.</b> Get Token. To Get Token you must send your code to https://accounts.google.com/o/oauth2/token endpoint</p>
    <p><b>Prototype Example:</b> {{ GOOGLE_TOKEN_ENDPOINT_PROTOTYPE }}</p>
  </div>
</template>

<script>
import {
  GOOGLE_AUTHORIZATION_ENDPOINT,
  GOOGLE_AUTHORIZATION_ENDPOINT_PROTOTYPE,
  GOOGLE_TOKEN_ENDPOINT_PROTOTYPE,
} from '../../constants';

export default {
  name: 'GoogleOAuthInformation',
  data() {
    return {
      GOOGLE_AUTHORIZATION_ENDPOINT,
      GOOGLE_AUTHORIZATION_ENDPOINT_PROTOTYPE,
      GOOGLE_TOKEN_ENDPOINT_PROTOTYPE,
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    },
    code() {
      return this.$store.getters.code;
    },
  },
};
</script>

<style scoped>

</style>
