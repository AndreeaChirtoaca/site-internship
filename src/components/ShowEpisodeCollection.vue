<template>
  <div class="collection">
    <h2 v-if="ok" id="episode">EPISODES</h2>
    <div class="episodeCollection">
      <ShowEpisodeCard
        v-for="(episode, index) in episodes"
        :key="index"
        :idShow="episode.id"
        :canonicalTitle="episode.attributes.canonicalTitle"
        :seasonNumber="episode.attributes.seasonNumber"
        :number="episode.attributes.number"
        :imageEpisode="episode.attributes.thumbnail.original"
      ></ShowEpisodeCard>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ShowEpisodeCard from "./ShowEpisodeCard";
export default {
  name: "ShowEpisodeCollection",
  components: {
    ShowEpisodeCard,
  },
  props: {
    idShow: String,
  },
  data: function () {
    return {
      episodes: {},
    };
  },
  computed: {
    ok: function () {
      if (this.episodes === null) {
        return false;
      } else {
        return true;
      }
    },
  },
  created: function () {
    const url = "https://kitsu.io/api/edge/anime/" + this.idShow + "/episodes";
    axios.get(url).then((response) => {
      //console.log(response.data.data);
      this.episodes = response.data.data;
    });
  },
};
</script>

<style scoped>
.collection {
  height: auto;
  margin: 20px 28px 10px 28px;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
  align-items: center;
}
#episode {
  color: rgb(216, 88, 42);
  padding-left: 10px;
  padding-top: 10px;
}
.episodeCollection {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
@media screen and (max-width: 500px) {
}
</style>
