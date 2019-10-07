<template>
  <div class="form-panel">
    <h4>LinkedIn Credentials:</h4>
    <div class="form-panel">
      <h4>Code Flow:</h4>
      <p><b>Step 1</b>: Get Code from LinkedIn via clicking on 'Sign in with LinkedIn' button.</p>
      <div v-if="!code">
        <button @click="signInRedirect">Sign in with LinkedIn</button>
        <br>
      </div>
      <div v-else>
        <p><b>You have already earned Code! See in Info Block</b></p>
      </div>
      <p><b>Step 2</b>: Get Token.</p>
      <button :class="{disabled: !code}" @click="getToken" v-if="!token" >Get Token</button>
      <p v-if="token">
        <b>You've finally get token! See in Info Block</b>
      </p>
      <hr>
      <h4>Client Credentials Flow:</h4>
      <button class="disabled">Get Token using Client Credentials Flow</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { LINKEDIN_AUTHORIZATION_ENDPOINT } from '../../constants';

export default {
  name: 'LinkedIn',
  computed: {
    token() {
      return this.$store.getters.linkedInToken;
    },
    code() {
      return this.$store.getters.linkedInCode;
    },
  },
  methods: {
    ...mapActions(['getLinkedInToken']),
    signInRedirect() {
      window.location = LINKEDIN_AUTHORIZATION_ENDPOINT;
    },
    getToken() {
      if (!this.code) {
        return;
      }
      this.getLinkedInToken();
    },
  },
  beforeCreate() {
    if (this.$route.query.code) {
      this.$store.dispatch('setLinkedInCode', this.$route.query.code);
      // deleted all queries from route to make it clear and prevent misunderstanding from our users
      this.$router.replace({ ...this.$router.currentRoute, query: {} });
    }
  },
};
</script>

<style scoped>

</style>
