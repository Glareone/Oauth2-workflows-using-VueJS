
const state = {
  code: null,
  token: null,
  information: 'This is a code grant type. You have to get CODE first, then using CODE you could get token',
};

const getters = {
  code(state) {
    return state.code;
  },
  token(state) {
    return state.token;
  },
  information(state) {
    return state.information;
  },
};

const mutations = {
  setCode(state, payload) {
    state.code = payload;
  },
  setToken(state, payload) {
    state.token = payload;
  },
};

const actions = {
  getCode({ commit }, url) {
    console.log(`get code action raised ${url}`);
  },
  setCode({ commit }, code) {
    commit('setCode', code);
    // TODO: LOGGING IS NEED TO BE ADDED
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
