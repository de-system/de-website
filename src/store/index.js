import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: "taro",
    cost: "",
    customer: [],
  },
  mutations: {
    fetchCus: (state) => {
      state.customer = "50";
    },
  },
  actions: {
    fetchCus: async ({ commit }) => {
      //const api = "http://127.0.0.1:3030/cost/cost";
      commit("fetchCost");
    },
  },
  getters: {},
});
