<template>
  <div>
    <ShowPageHeader :trailer="video"></ShowPageHeader>
    <ShowDescriptionCard
      :titleShow="dataShow.canonicalTitle"
      :subtitleShow="dataShow.subtitleShow"
      :imageShow="dataShow.posterImage.medium"
      :descriptionShow="dataShow.description"
    ></ShowDescriptionCard>
    <div>
      <ShowEpisodeCollection :idShow="id"></ShowEpisodeCollection>
    </div>
    <div>
      <ShowMetaCollection :idShow="id"></ShowMetaCollection>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ShowPageHeader from "./components/ShowPageHeader";
import ShowDescriptionCard from "./components/ShowDescriptionCard";
import ShowEpisodeCollection from "./components/ShowEpisodeCollection";
import ShowMetaCollection from "./components/ShowMetaCollection";

export default {
  name: "ShowPage",
  components: {
    ShowPageHeader,
    ShowDescriptionCard,
    ShowEpisodeCollection,
    ShowMetaCollection,
  },
  data: function () {
    return {
      id: "",
      dataShow: {},
      trailer: "https://www.youtube.com/embed/2QTDcffpunY?list=RD2QTDcffpunY",
      trailerId: "",
    };
  },
  computed: {
    video: function () {
      return "https://www.youtube.com/embed/" + this.trailerId;
    },
  },
  created: function () {
    this.id = this.$route.params.id;
    const url = "https://kitsu.io/api/edge/anime/" + this.id;

    axios.get(url).then((response) => {
      //console.log(response.data.data);
      this.dataShow = response.data.data.attributes;
      this.trailerId = response.data.data.attributes.youtubeVideoId;
      //console.log(this.video)
    });

    /* const charactersUrl = `https://kitsu.io/api/edge/anime/${this.id}/characters`;

    axios.get(charactersUrl).then((response) => {
      response.data.data.forEach((character) => {
        axios
          .get(
            `https://kitsu.io/api/edge/media-characters/${character.id}/character`
          )
          .then(({ data }) => {
            console.log(data);
          });
     });
    });*/
  },
};
</script>

<style scoped>
</style>
