import axios from 'axios';
import {
  LINKEDIN_TOKEN_ENDPOINT_DATA,
  LINKEDIN_TOKEN_ENDPOINT,
} from '../constants';

const state = {
  linkedInCode: '',
  linkedInToken: '',
};

const getters = {
  linkedInCode(state) {
    return state.linkedInCode;
  },
  linkedInToken(state) {
    return state.linkedInToken;
  },
};

const mutations = {
  'SET_LINKEDIN_CODE'(state, payload) {
    state.linkedInCode = payload;
  },
  'SET_LINKEDIN_TOKEN'(state, payload) {
    state.linkedInToken = payload;
  },
};

const actions = {
  setLinkedInCode({ commit }, code) {
    commit('SET_LINKEDIN_CODE', code);
  },
  async getLinkedInToken({ commit, state }) {
    try {
      const requestData = `${LINKEDIN_TOKEN_ENDPOINT_DATA}${state.linkedInCode}`;
      const response = await axios.post(`${LINKEDIN_TOKEN_ENDPOINT}`, requestData, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      debugger;
      commit('SET_LINKEDIN_TOKEN', response.data.access_token);
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
