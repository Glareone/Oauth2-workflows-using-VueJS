<template>
<div>
  <p><b>Current Facebook Code</b>: {{ facebookCode }}</p>
  <p><b>Current Facebook Token</b>: {{ facebookToken }}</p>
  <p>
    <b>1.</b> Get Code ("GET" Request). To Get Code you must compose url and redirect
    to {{ FACEBOOK_BASE_URI }}
  </p>
  <p><b>Code Endpoint Prototype</b>: {{ FACEBOOK_AUTHORIZATION_ENDPOINT_PROTOTYPE }}</p>
  <p><b>Complete Code Endpoint Example </b>: {{ FACEBOOK_AUTHORIZATION_ENDPOINT }}</p>
  <p>
    <b>2.</b> Get Token ("GET" Request). To Get Token you must compose url and make a call
    to {{ FACEBOOK_GRAPH_BASE_URI }}
  </p>
  <p><b>Token Endpoint Prototype</b>: {{ FACEBOOK_TOKEN_ENDPOINT_PROTOTYPE }}</p>
  <p>
    <b>Complete Token Endpoint Example</b>: {{ `${FACEBOOK_TOKEN_ENDPOINT}${this.facebookCode}` }}
  </p>
  <p>Pay attention: your redirect URI must have a slash at the end!</p>
  <p>More Info:
    <a href="https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing/">Facebook Access Token Information</a>
  </p>
</div>
</template>

<script>
import {
  FACEBOOK_AUTHORIZATION_ENDPOINT_PROTOTYPE,
  FACEBOOK_AUTHORIZATION_ENDPOINT,
  FACEBOOK_TOKEN_ENDPOINT_PROTOTYPE,
  FACEBOOK_TOKEN_ENDPOINT,
  FACEBOOK_BASE_URI,
  FACEBOOK_GRAPH_BASE_URI,
} from '../../constants';

export default {
  name: 'FacebookOAuthInformation',
  data() {
    return {
      FACEBOOK_AUTHORIZATION_ENDPOINT_PROTOTYPE,
      FACEBOOK_AUTHORIZATION_ENDPOINT,
      FACEBOOK_TOKEN_ENDPOINT_PROTOTYPE,
      FACEBOOK_TOKEN_ENDPOINT,
      FACEBOOK_BASE_URI,
      FACEBOOK_GRAPH_BASE_URI,
    };
  },
  computed: {
    facebookCode() {
      return this.$store.getters.facebookCode;
    },
    facebookToken() {
      return this.$store.getters.facebookToken;
    },
  },
};
</script>

<style scoped>

</style>
