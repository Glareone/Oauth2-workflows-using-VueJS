import axios from 'axios';
import { GOOGLE_TOKEN_DATA, GOOGLE_TOKEN_ENDPOINT } from '../constants';

const state = {
  googleCode: null,
  googleToken: null,
  googleRefreshToken: null,
};

const getters = {
  googleCode(state) {
    return state.googleCode;
  },
  googleToken(state) {
    return state.googleToken;
  },
};

const mutations = {
  'SET_GOOGLE_CODE'(state, payload) {
    state.googleCode = payload;
  },
  'SET_GOOGLE_TOKEN'(state, payload) {
    state.googleToken = payload;
  },
};

const actions = {
  async getGoogleToken({ commit, state }) {
    try {
      const requestData = GOOGLE_TOKEN_DATA.replace('=CODE', `=${state.googleCode}`);
      // eslint-disable-next-line
      const response = await axios.post(
        GOOGLE_TOKEN_ENDPOINT, requestData,
        {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
        },
      );
      // eslint-disable-next-line
      const { data: { access_token } } = response;
      commit('SET_GOOGLE_TOKEN', access_token);
    } catch (error) {
      console.log(error);
    }
  },
  setGoogleCode({ commit }, code) {
    commit('SET_GOOGLE_CODE', code);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
