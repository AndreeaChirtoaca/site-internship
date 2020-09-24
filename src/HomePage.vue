<template>
  <div class="home">
    <HeroSection
      :title="heroShow.canonicalTitle"
      :image="heroShow.posterImage.original"
      :description="heroShow.description"
      :id="idHero"
    />
    <BrowseCollection name="Most Popular" link="/MostPopular"/>
    <BrowseCollection name="Recently Updated" link="/RecentlyUpdated"/>
    <BrowseCollection name="Newest" link="/Newest"/>
    <MoreAnime/>
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
    MoreAnime
  },
  data: function() {
    return {
      heroShow: [{}],
      idHero: "4"
    };
  },
  beforeMount: function() {
    const arl = "https://kitsu.io/api/edge/anime/" + this.idHero;
    axios.get(arl).then(response => {
      this.heroShow = response.data.data.attributes;
    });
  }
};
</script>

<style scoped>
.home {
}
</style>
