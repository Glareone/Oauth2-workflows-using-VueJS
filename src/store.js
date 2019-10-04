import Vue from 'vue';
import Vuex from 'vuex';
import google from './vuex-modules/google';
import firebase from './vuex-modules/firebase';
import facebook from './vuex-modules/facebook';
import linkedin from './vuex-modules/linkedin';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    google,
    firebase,
    facebook,
    linkedin,
  },
});
