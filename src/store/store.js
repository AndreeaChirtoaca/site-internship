import Vue from "vue";
import Vuex from "vuex";
import search from "./modules/search";
import mostPopular from "./modules/mostPopular";
import browseCollection from "./modules/browseCollection";
import cast from "./modules/cast";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    mostPopular,
    browseCollection,
    search,
    cast
  }
});

export default store;
