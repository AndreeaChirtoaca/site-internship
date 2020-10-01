import axios from "axios";
const search = {
  state: {
    moviesList: [],
    tvList: []
  },
  mutations: {
    saveResult: function (state, { attributes, id }) {
      const element = {
        title: attributes.canonicalTitle,
        description: attributes.description,
        image: attributes.posterImage.original,
        id: id,
        rating: attributes.averageRating,
        slug: attributes.slug,
        subtype: attributes.subtype
      };
      if (element.subtype === "movie") {
        state.moviesList.push(element);
      } else {
        state.tvList.push(element);
      }
    },
    cleanSearch: function (state) {
      state.moviesList = [];
      state.tvList = [];
    }
  },
  actions: {
    handleSearch: function (context, search) {
      console.log(search);
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&filter%5Btext%5D=" +
            search
        )
        .then(function ({ data }) {
          context.commit("cleanSearch");
          data.data.forEach((element) => {
            context.commit("saveResult", element);
          });
        });
    }
  }
};
export default search;
