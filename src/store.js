import Vue from 'vue';
import Vuex from 'vuex';
import google from './vuex-modules/google';
import firebase from './vuex-modules/firebase';
import facebook from './vuex-modules/facebook';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    google,
    firebase,
    facebook,
  },
});
