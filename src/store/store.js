import Vue from "vue";
import Vuex from "vuex";
import mostPopular from "./modules/mostPopular";
import browseCollection from "./modules/browseCollection";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    mostPopular,
    browseCollection
  }
});

export default store;
