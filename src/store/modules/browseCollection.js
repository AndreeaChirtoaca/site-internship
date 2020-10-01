import axios from "axios";

const browseCollection = {
  state: {
    popular: [],
    newest: [],
    updated: []
  },
  mutations: {
    save6newest: function (state, { attributes, id }) {
      const card = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        id: id
      };
      state.newest.push(card);
    },
    save6popular: function (state, { attributes, id }) {
      const card = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        id: id
      };
      state.popular.push(card);
    },

    save6updated: function (state, { attributes, id }) {
      const card = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        id: id
      };
      state.updated.push(card);
    },
    clean: function (state, payload) {
      if (state.popular !== [] && payload.payload === "popular") {
        state.popular = [];
      } else if (state.updated !== [] && payload.payload === "updated") {
        state.updated = [];
      } else if (state.newest !== [] && payload.payload === "newest") {
        state.newest = [];
      }
    }
  },
  actions: {
    fetch6popular: function (context) {
      context.commit("clean", { payload: "popular" });
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=popularityRank"
        )
        .then(function ({ data }) {
          data.data.forEach((element) => {
            context.commit("save6popular", element);
          });
        });
    },
    fetch6newest: function (context) {
      context.commit("clean", { payload: "newest" });
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-createdAt"
        )
        .then(function ({ data }) {
          data.data.forEach((element) => {
            context.commit("save6newest", element);
          });
        });
    },
    fetch6updated: function (context) {
      context.commit("clean", { payload: "updated" });
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-updatedAt"
        )
        .then(function ({ data }) {
          data.data.forEach((element) => {
            context.commit("save6updated", element);
          });
        });
    }
  }
};

export default browseCollection;
