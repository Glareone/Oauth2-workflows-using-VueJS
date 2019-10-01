import Vue from 'vue';
import Vuex from 'vuex';
import google from './vuex-modules/google';
import firebase from './vuex-modules/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    google,
    firebase,
  },
});
