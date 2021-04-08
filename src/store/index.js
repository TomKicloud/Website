import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: null
  },
  mutations: {
    updateUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {},
  modules: {},
  getters: {
    user: state => {
      return state.currentUser;
    },
  }
});
