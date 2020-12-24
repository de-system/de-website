import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: "taro",
    cost: "",
  },
  // mutations: {
  //   fetchCost: (state) => {
  //     state.cost = "50";
  //   },
  // },
  // actions: {
  //   fetchCost: async ({ commit }) => {
  //     //const api = "http://127.0.0.1:3030/cost/cost";
  //     commit("fetchCost");
  //   },
  // },
  getters: {},
});
