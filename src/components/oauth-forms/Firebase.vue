<template>
  <div id="signin" class="form-panel">
    <h4>Firebase Credentials:</h4>
    <div class="signin-form form-panel">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">E-mail:</label>
          <input
            id="email"
            type="email"
            v-model="email">
        </div>
        <div class="input">
          <label for="password">Password:</label>
          <input
            id="password"
            type="password"
            v-model="password">
        </div>
        <div class="submit">
          <button type="submit" :class="{disabled: !email || !password}">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: 'glareone@gmail.com',
      password: 'qwerty12345',
    };
  },
  name: 'Firebase',
  methods: {
    ...mapActions({ signIn: 'firebaseSignIn' }),
    onSubmit() {
      if (!this.email || !this.password) {
        return;
      }

      const userData = { email: this.email, password: this.password };
      this.signIn(userData);
    },
  },
};
</script>

<style lang="scss" scoped>
  .signin-form {
    color: var(--text-color);
    width: 400px;
    padding: 20px;
  }

  .input {
    margin: 10px auto;

    label {
      display: block;
      color: #4e4e4e;
      margin-bottom: 6px;
    }

    input {
      font: inherit;
      width: 100%;
      padding: 6px 12px;
      box-sizing: border-box;
      border: 1px solid var(--border-color);
      border-radius: var(--border-button-radius);

      &:focus {
        outline: none;
        border: 1px solid var(--tertiary-color);
        background-color: #eee;
      }
    }
  }

  .submit button {
    &:hover,
    &:active {
      background-color: var(--secondary-color);
    }
    &[class="disabled"],
    &[class="disabled"]:hover,
    &[class="disabled"]:active {
      border: 1px solid var(--tertiary-color);
      background-color: transparent;
      cursor: not-allowed;
    }
  }
</style>
