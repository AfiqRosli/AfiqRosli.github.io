import Vue from "vue";
import Vuex from "vuex";
import Chat from "@/enums/Chat";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chats: []
  },
  mutations: {
    CREATE_CHAT(state, chat) {
      state.chats.push(chat);
    },
    REMOVE_CHAT_LOADING(state, payload) {
      state.chats.splice(payload.chatIndex, 1);
    }
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
    replaceLoading({ commit, dispatch, state }, chat) {
      return new Promise((resolve, reject) => {
        try {
          let payload = {
            chatIndex: null
          };

          let chats = state.chats;
          let index = chats.length - 1;
          for (index; index >= 0; index--) {
            if (chats[index].type == Chat.LOADING) {
              payload.chatIndex = index;

              break;
            }
          }

          commit("REMOVE_CHAT_LOADING", payload);

          (async () => {
            await dispatch("addChat", chat);
          })();

          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }
  }
});
