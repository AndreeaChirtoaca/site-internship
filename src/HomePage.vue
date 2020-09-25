<template>
  <div class="home">
    <HeroSection
      :title="heroShow.canonicalTitle"
      :image="heroShow.posterImage.original"
      :description="heroShow.description"
      :id="idHero"
    />
    <BrowseCollection
      name="Most Popular"
      link="/MostPopular"
      :cards="cardsPopularCollection"
    />
    <BrowseCollection
      name="Recently Updated"
      link="/RecentlyUpdated"
      :cards="cardsPopularCollection"
    />
    <BrowseCollection
      name="Newest"
      link="/Newest"
      :cards="cardsPopularCollection"
    />
    <MoreAnime />
  </div>
</template>

<script>
import axios from "axios";
import HeroSection from "./components/HeroSection";
import BrowseCollection from "./components/BrowseCollection";
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
  computed: {
    cardsPopularCollection: function () {
      return this.$store.state.browseCollection.cardsPopular;
    },
    cardsNewestCollection: function () {
      return this.$store.browseCollection.cardsNewest;
    },
  },
  created: function () {
    this.$store.dispatch("fetch6popular");
    this.$store.dispatch("fetch6newest");
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
