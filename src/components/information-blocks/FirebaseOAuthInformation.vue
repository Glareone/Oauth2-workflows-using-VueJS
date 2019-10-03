<template>
  <div>
    <div><b>Firebase Token</b>: {{ firebaseToken }}</div>
    <div><b>Firebase LocalId</b>: {{ firebaseLocalId }}</div>
    <p>To use firebase token you have to add it in query params to your call: </p>
    <p><b>Example</b>: https://vuejs-auth-978c4.firebaseio.com/users.json?auth={{ firebaseToken || 'YOUR_TOKEN' }}</p>
  </div>
</template>

<script>
export default {
  name: 'FirebaseOAuthInformation',
  computed: {
    firebaseToken() {
      return this.$store.getters.firebaseToken;
      },
    firebaseLocalId() {
      return this.$store.getters.firebaseLocalId;
    }
  }
};
</script>

<style scoped>

</style>
