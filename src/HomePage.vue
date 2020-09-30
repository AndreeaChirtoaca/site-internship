<template>
  <div class="home">
    <HeroSection
      :title="heroShow.canonicalTitle"
      :image="heroShow.posterImage.original"
      :description="heroShow.description"
      :id="idHero"
    />
    <BrowseCollection name="Most Popular" link="/MostPopular" />
    <BrowseCollection name="Recently Updated" link="/RecentlyUpdated" />
    <BrowseCollection name="Newest" link="/Newest" />
    <MoreAnime />
  </div>
</template>

<script>
import axios from "axios";
import HeroSection from "./components/HeroSection";
import BrowseCollection from "./BrowseCollection";
import MoreAnime from "./components/MoreAnime";
export default {
  name: "HomePage",
  components: {
    HeroSection,
    BrowseCollection,
    MoreAnime,
  },
  data: function () {
    return {
      heroShow: null,
      idHero: null,
    };
  },

  created: function () {
    const arl = "https://kitsu.io/api/edge/trending/anime";
    axios.get(arl).then((response) => {
      //console.log(response.data.data[0]);
      this.heroShow = response.data.data[0].attributes;
      this.idHero = response.data.data[0].id;
    });
  },
};
</script>

<style scoped>
</style>
