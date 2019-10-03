const state = {
  facebookCode: '',
  facebookToken: '',
  facebookRefreshToken: '',
};

const getters = {
  facebookCode(state) {
    return state.facebookCode;
  },
  facebookToken(state) {
    return state.facebookToken;
  },
  facebookRefreshToken(state) {
    return state.facebookRefreshToken;
  },
};

const mutations = {
  'SET_FACEBOOK_CODE'(state, payload) {
    state.facebookCode = payload;
  },
  'SET_FACEBOOK_TOKEN'(state, payload) {
    state.facebookToken = payload;
  },
  'SET_FACEBOOK_REFRESH_TOKEN'(state, payload) {
    state.facebookRefreshToken = payload;
  },
};

const actions = {
  getFacebookCode() {

  },
  getFacebookToken() {

  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
