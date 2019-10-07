<template>
  <div>
    <p><b>Current LinkedIn Code</b>: {{ linkedInCode }}</p>
    <p><b>Current LinkedIn Token</b>: {{ linkedInToken }}</p>
    <p><b>1.</b> Get Code ("GET" Request). To Get Code you must compose url and redirect to </p>
    <p><b>Complete Code Endpoint Example </b>: {{ LINKEDIN_AUTHORIZATION_ENDPOINT }}</p>
    <p>
      <b>2.</b>Get Token ("POST" Request). To Get Token you must compose url and make a call to
    </p>
    <p><b>Token Endpoint Prototype</b>: {{ LINKEDIN_TOKEN_ENDPOINT }}</p>
    <p><b>Token Endpoint Body Example</b>: {{ LINKEDIN_TOKEN_ENDPOINT_DATA }}</p>
    <p>More Info:
      <a href="https://docs.microsoft.com/en-us/linkedin/shared/authentication/authentication?context=linkedin/consumer/context#">Linked In OAuth2</a>
    </p>
  </div>
</template>

<script>
import {
  LINKEDIN_AUTHORIZATION_ENDPOINT,
  LINKEDIN_TOKEN_ENDPOINT,
  LINKEDIN_TOKEN_ENDPOINT_DATA,
} from '../../constants';

export default {
  name: 'LinkedInOAuthInformation',
  data() {
    return {
      LINKEDIN_AUTHORIZATION_ENDPOINT,
      LINKEDIN_TOKEN_ENDPOINT,
      LINKEDIN_TOKEN_ENDPOINT_DATA,
    };
  },
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
