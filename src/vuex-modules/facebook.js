import axios from 'axios';
import { FACEBOOK_TOKEN_ENDPOINT } from '../constants';

const state = {
  facebookCode: '',
  facebookToken: '',
};

const getters = {
  facebookCode(state) {
    return state.facebookCode;
  },
  facebookToken(state) {
    return state.facebookToken;
  },
};

const mutations = {
  'SET_FACEBOOK_CODE'(state, payload) {
    state.facebookCode = payload;
  },
  'SET_FACEBOOK_TOKEN'(state, payload) {
    state.facebookToken = payload;
  },
};

const actions = {
  setFacebookCode({ commit }, code) {
    commit('SET_FACEBOOK_CODE', code);
  },
  async getFacebookToken({ commit, state }) {
    try {
      // eslint-disable-next-line
      const { data: { access_token } } = await axios.get(`${FACEBOOK_TOKEN_ENDPOINT}${state.facebookCode}`);
      // this access_token is long-lived access token
      // https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing/
      commit('SET_FACEBOOK_TOKEN', access_token);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
