export default {
  namespaced: true,
  state: {
    path: "/",
    name: "start"
  },
  mutations: {
    Set_Router(state, value) {
      if (value.path !== null) {
        state.path = value.path;
      }
      if (value.name !== null) {
        state.name = value.name;
      }
    }
  },
  actions: {
    setRouter({ commit }, value) {
      commit("Set_Router", value);
    }
  }
};
