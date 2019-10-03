<template>
  <div class="form-panel">
    <h4>Facebook Credentials:</h4>
    <div class="form-panel">
      <p><b>Step 1</b>: Get Code from google via clicking on 'Sign in with Facebook' button.</p>
      <div v-if="!code">
        <button @click="signInRedirect">Sign in with Facebook</button>
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
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Facebook',
  computed: {
    token() {
      return this.$store.getters.facebookToken;
    },
    code() {
      return this.$store.getters.facebookCode;
    },
  },
  methods: {
    ...mapActions({ getToken: 'getFacebookToken' }),
    signInRedirect() {
    },
    getToken() {
      if(!this.code) {
        return;
      }
      this.getToken();
    },
  }
};
</script>

<style scoped>

</style>
