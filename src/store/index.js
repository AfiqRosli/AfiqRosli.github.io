import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chats: []
  },
  mutations: {
    CREATE_CHAT(state, chat) {
      state.chats.push(chat);
    },
  },
  actions: {
    addChat({ commit }, chat) {
      return new Promise((resolve, reject) => {
        try {
          commit("CREATE_CHAT", chat);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  }
});
