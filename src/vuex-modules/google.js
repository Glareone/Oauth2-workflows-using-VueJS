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
  setCode(state, payload) {
    state.googleCode = payload;
  },
  setToken(state, payload) {
    state.googleToken = payload;
  },
};

const actions = {
  async getToken({ commit, state }) {
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
      const { data: { access_token }} = response;
      debugger;
      commit('setToken', access_token);
    } catch (error) {
      console.log(error);
    }
  },
  setCode({ commit }, code) {
    commit('setCode', code);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
