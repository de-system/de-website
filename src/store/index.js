import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";

Vue.use(Vuex);
const localStoragePlugin = (store) => {
  store.subscribe((mutation, { user }) => {
    // 當執行 setUserData 時才執行以下程式碼
    if (mutation.type === "setUserData") {
      window.localStorage.setItem("user", JSON.stringify(user));
    }
  });
};
export default new Vuex.Store({
  state: {
    user: {
      account: "",
      password: "",
      isLogin: false,
    },
  },
  // state: {
  //   account: "",
  //   cost: "",
  //   customer: [],
  // },
  mutations: {
    setUserData(state, { userData }) {
      state.user.account = userData.account;
      state.user.password = userData.password;
      state.user.isLogin = true;
    },
  },
  plugins: [localStoragePlugin],
  // mutations: {
  //   fetchCus: (state, payload) => {
  //     state.customer = payload;
  //   },
  // },
  // actions: {
  //   fetchCus: async ({ commit }) => {
  //     let payload =[];
  //     //const api = "https://de-backend.herokuapp.com/cost/cost";
  //     commit("fetchCost");
  //   },
  // },
  getters: {},
});
