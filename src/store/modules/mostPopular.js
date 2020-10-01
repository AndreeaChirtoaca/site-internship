import axios from "axios";
const mostPopular = {
  state: {
    cards: null
  },
  mutations: {
    savePopular: function (state, data) {
      state.cards = data;
    }
  },
  actions: {
    fetchPopular: function (context) {
      axios
        .get("https://kitsu.io/api/edge/anime?sort=popularityRank")
        .then((response) => {
          //console.log(response.data.data);
          context.commit("savePopular", response.data.data);
        });
    }
  }
};
export default mostPopular;
