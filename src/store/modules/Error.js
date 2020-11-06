export default {
  namespaced: true,
  state: {
    error: ""
  },
  mutations: {
    New_Error(state, value) {
      if (value.error !== null) {
        state.error = value;
      }
    }
  },
  actions: {
    newError({ commit }, value) {
      commit("New_Error", value);
    }
  }
};
