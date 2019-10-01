import axios from 'axios';
import { GOOGLE_TOKEN_DATA, GOOGLE_TOKEN_ENDPOINT } from '../constants';

const state = {
  googleCode: null,
  googleToken: null,
  information: 'This is a code grant type. You have to get CODE first, then using CODE you could get token',
};

const getters = {
  code(state) {
    return state.googleCode;
  },
  token(state) {
    return state.googleToken;
  },
  information(state) {
    return state.information;
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
      const { data: { access_token } } = await axios.post(
        GOOGLE_TOKEN_ENDPOINT, requestData,
        {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
        },
      );

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
