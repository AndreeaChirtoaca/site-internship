<template>
  <div class="collection">
    <h2 id="episode">EPISODES</h2>
    <div class="episodeCollection">
      <ShowEpisodeCard
        :image="episode.image"
        :title="episode.title"
        :ep="episode.ep"
        :season="episode.season"
      ></ShowEpisodeCard>
      <ShowEpisodeCard
        :image="episode.image"
        :title="episode.title"
        :ep="episode.ep"
        :season="episode.season"
      ></ShowEpisodeCard>
      <ShowEpisodeCard
        :image="episode.image"
        :title="episode.title"
        :ep="episode.ep"
        :season="episode.season"
      ></ShowEpisodeCard>
      <ShowEpisodeCard
        :image="episode.image"
        :title="episode.title"
        :ep="episode.ep"
        :season="episode.season"
      ></ShowEpisodeCard>
      <ShowEpisodeCard
        :image="episode.image"
        :title="episode.title"
        :ep="episode.ep"
        :season="episode.season"
      ></ShowEpisodeCard>
    </div>
  </div>
</template>

<script>
import ShowEpisodeCard from "./ShowEpisodeCard";
export default {
  name: "ShowEpisodeCollection",
  components: {
    ShowEpisodeCard
  },
  data: function() {
    return {
      episods: [1, 2, 3, 4, 5, 6],
      episode: {
        image:
          "https://funart.pro/uploads/posts/2019-12/1575953127_vrata-shtejna-0-steinsgate-0-anime-1.jpg",
        title: "hahaha",
        ep: 1,
        season: 2
      }
    };
  }
};
</script>

<style scoped>
.collection {
  height: auto;
  margin: 20px 28px 10px 28px;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
}
#episode {
  color: rgb(216, 88, 42);
}
.episodeCollection {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
