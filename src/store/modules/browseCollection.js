import axios from "axios";

const browseCollection = {
  state: {
    cardsPopular: null,
    cardsNewest: null,
    cardsUpdated: null
  },
  mutations: {
    save6popular: function (state, data) {
      state.cardsPopular = data;
    },
    save6newest: function (state, data) {
      state.cardsNewest = data;
    }
  },
  actions: {
    fetch6popular: function (context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=popularityRank"
        )
        .then(function ({ data }) {
          context.commit("save6popular", data.data);
        });
    },
    fetch6newest: function (context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-createdAt"
        )
        .then(function ({ data }) {
          context.commit("save6newest", data.data);
        });
    }
  },
  getters: {
    cardsPopularFinal: function (state) {
      return state.cardsPopular;
    }
  }
};

export default browseCollection;
