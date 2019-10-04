<template>
  <div class="form-panel">
    <h4>LinkedIn Credentials:</h4>
    <div class="form-panel">
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
    </div>
  </div>
</template>

<script>
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
    signInRedirect() {
      //window.location = FACEBOOK_AUTHORIZATION_ENDPOINT;
    },
    getToken() {
      if (!this.code) {
        return;
      }
      this.getFacebookToken();
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
