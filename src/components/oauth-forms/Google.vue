<template>
  <div class="form-panel">
    <h4>Google Credentials:</h4>
    <div class="form-panel">
      <button @click="signInRedirect">Sign in with Google</button>
      <br>
      <button @click="getToken">Get Token</button>
    </div>
  </div>
</template>

<script>
import { GOOGLE_TOKEN_ENDPOINT, GOOGLE_AUTHORIZATION_ENDPOINT } from '../../constants';

export default {
  name: 'Google',
  computed: {
    code() {
      return this.$store.getters.code;
    },
    token() {
      return this.$store.getters.token;
    },
  },
  methods: {
    getCode() {
      console.log('method get code');
    },
    signInRedirect() {
      debugger;
      window.location = GOOGLE_AUTHORIZATION_ENDPOINT;
    },
    getToken() {
      const preparedUrl = GOOGLE_TOKEN_ENDPOINT.replace('=CODE', `=${this.$store.getters.code}`);
      this.$store.dispatch('getToken', preparedUrl);
    },
  },
  beforeCreate() {
    this.$store.dispatch('setCode', this.$route.query.code);
    // deleted all queries from route to make it clear and prevent misunderstandings from our users.
    this.$router.replace({ ...this.$router.currentRoute, query: {} });
  },
};
</script>

<style scoped>

</style>
