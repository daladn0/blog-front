export default {
  namespaced: true,
  state: () => ({
    currentUser: null,
    isAuth: false,
  }),
  getters: {
    currentUser: ({ currentUser }) => currentUser,
    isAuth: ({ isAuth }) => isAuth,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
  },
  actions: {
    login({ commit }, user) {
      commit("setCurrentUser", user);
      commit("setIsAuth", true);
    },

    logout({ commit }) {
      commit("setCurrentUser", null);
      commit("setIsAuth", false);
    },
  },
};
