// const uuid = require("uuid");
import { v4 } from "uuid";

export default {
  namespaced: true,
  state: () => ({
    toastStack: [],
  }),
  getters: {
    toastStack: ({ toastStack }) => toastStack,
  },
  mutations: {
    pushToStack(state, { type, message }) {
      const newToast = {
        type,
        message,
        id: v4(),
      };

      state.toastStack.push(newToast);
    },
    deleteFromStackById(state, id) {
      state.toastStack = state.toastStack.filter((toast) => toast.id !== id);
    },
    shiftFromStack(state) {
      state.toastStack.shift();
    },
  },
  actions: {
    addNewToast({ commit, state }, { type, message }) {
      if (state.toastStack.length >= 3) {
        commit("shiftFromStack");
      }
      commit("pushToStack", { type, message });
    },
    deleteFromStackById({ commit }, id) {
      commit("deleteFromStackById", id);
    },
  },
};
