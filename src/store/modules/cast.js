import axios from "axios";
const cast = {
  state: {
    ok: 0,
    characterList: []
  },
  mutations: {
    saveCharacter: function (state, character) {
      state.ok = 1;
      state.characterList.push(character);
      //console.log(character.name);
    }
  },
  actions: {
    fetchCharacter: function (context, payload) {
      const urlCharacter = `https://kitsu.io/api/edge/anime/${payload.id}/characters?page[limit]=12&page[offset]=6`;
      axios.get(urlCharacter).then((response) => {
        response.data.data.forEach((character) => {
          axios
            .get(
              `https://kitsu.io/api/edge/media-characters/${character.id}/character`
            )
            .then(({ data }) => {
              const character = {
                name: data.data.attributes.canonicalName,
                description: data.data.attributes.description,
                image: data.data.attributes.image.original
              };
              context.commit("saveCharacter", character);
            });
        });
      });
    }
  }
};

export default cast;
