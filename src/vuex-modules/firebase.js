import axios from 'axios';
import { FIREBASE_AUTHORIZATION_ENDPOINT } from '../constants';

const state = {
  firebaseLocalId: null,
  firebaseToken: null,
};

const getters = {
  firebaseLocalId(state) {
    return state.firebaseLocalId;
  },
  firebaseToken(state) {
    return state.firebaseToken;
  },
};

const mutations = {
  'SET_FIREBASE_TOKEN'(state, payload) {
    state.firebaseToken = payload;
  },
  'SET_FIREBASE_LOCALID'(state, payload) {
    state.firebaseLocalId = payload;
  },
};

const actions = {
  async firebaseSignIn({ commit, dispatch }, userData) {
    try {
      const authData = { ...userData, returnSecureToken: true };
      const { data: { idToken, localId } } = await axios.post(FIREBASE_AUTHORIZATION_ENDPOINT, authData);
      commit('SET_FIREBASE_TOKEN', idToken);
      commit('SET_FIREBASE_LOCALID', localId);
    } catch(error) {
      console.log(error);
    }

  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
