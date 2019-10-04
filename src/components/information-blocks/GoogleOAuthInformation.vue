<template>
  <div>
    <p><b>Current Code</b>: {{ code }}</p>
    <p><b>Current Token</b>: {{ token }}</p>
    <p>To Sign in with Google OAuth Code Grant you need next:</p>
    <p><b>1.</b> Get Code ("GET" request). To Get Code you must compose url and redirect to {{ `${GOOGLE_BASE_URI}/auth` }}</p>
    <p><b>Prototype Code Endpoint Example</b>: {{ GOOGLE_AUTHORIZATION_ENDPOINT_PROTOTYPE }}</p>
    <p><b>Complete Code Endpoint Example</b>: {{ GOOGLE_AUTHORIZATION_ENDPOINT }} </p>
    <p><b>2.</b> Get Token ("POST" request). To Get Token you must send your code to {{ `${GOOGLE_BASE_URI}/token` }} endpoint</p>
    <p><b>Prototype Token Endpoint Example:</b> {{ GOOGLE_TOKEN_ENDPOINT_PROTOTYPE }}</p>
    <p><b>Complete Token Endpoint Example:</b> {{ GOOGLE_TOKEN_ENDPOINT }}</p>
    <p><b>Token Endpoint Data Example:</b> {{ GOOGLE_TOKEN_DATA }}</p>
    <p>More info: <a href="https://developers.google.com/oauthplayground">Google playground</a></p>
  </div>
</template>

<script>
import {
  GOOGLE_AUTHORIZATION_ENDPOINT,
  GOOGLE_AUTHORIZATION_ENDPOINT_PROTOTYPE,
  GOOGLE_TOKEN_ENDPOINT_PROTOTYPE,
  GOOGLE_BASE_URI,
  GOOGLE_TOKEN_ENDPOINT,
  GOOGLE_TOKEN_DATA,
} from '../../constants';

export default {
  name: 'GoogleOAuthInformation',
  data() {
    return {
      GOOGLE_AUTHORIZATION_ENDPOINT,
      GOOGLE_AUTHORIZATION_ENDPOINT_PROTOTYPE,
      GOOGLE_TOKEN_ENDPOINT_PROTOTYPE,
      GOOGLE_BASE_URI,
      GOOGLE_TOKEN_ENDPOINT,
      GOOGLE_TOKEN_DATA,
    };
  },
  computed: {
    token() {
      return this.$store.getters.googleToken;
    },
    code() {
      return this.$store.getters.googleCode;
    },
  },
};
</script>

<style scoped>

</style>
