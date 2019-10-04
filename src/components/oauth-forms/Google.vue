<template>
  <div class="form-panel">
    <h4>Google Credentials:</h4>
    <div class="form-panel">
      <p><b>Step 1</b>: Get Code from google via clicking on 'Sign in with Google' button.</p>
      <div v-if="!code">
        <button @click="signInRedirect" >Sign in with Google</button>
        <br>
      </div>
      <div v-else>
        <p><b>You have already earned Code! See in Info Block</b></p>
      </div>
      <p><b>Step 2</b>: Get Token.</p>
      <button :class="{disabled: !code}" @click="getToken" v-if="!token">Get Token</button>
      <p v-if="token">
        <b>You've finally get token! See in Info Block</b>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { GOOGLE_AUTHORIZATION_ENDPOINT } from '../../constants';

export default {
  name: 'Google',
  computed: {
    code() {
      return this.$store.getters.googleCode;
    },
    token() {
      return this.$store.getters.googleToken;
    },
  },
  methods: {
    ...mapActions({
      getGoogleToken: 'getGoogleToken',
    }),
    signInRedirect() {
      window.location = GOOGLE_AUTHORIZATION_ENDPOINT;
    },
    getToken() {
      if (!this.code) {
        return;
      }
      this.getGoogleToken();
    },
  },
  beforeCreate() {
    if (this.$route.query.code) {
      this.$store.dispatch('setGoogleCode', this.$route.query.code);
      // deleted all queries from route to make it clear and prevent misunderstanding from our users
      this.$router.replace({ ...this.$router.currentRoute, query: {} });
    }
  },
};
</script>

<style scoped>

</style>
