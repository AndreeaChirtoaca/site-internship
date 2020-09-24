import Vue from "vue";
import Vuex from "vuex";
import mostPopular from "./modules/mostPopular";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    mostPopular
  }
});

export default store;
