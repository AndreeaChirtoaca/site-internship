<template>
  <div>
    <HeroSection
      :title="heroShow.canonicalTitle"
      :image="heroShow.posterImage.original"
      :description="heroShow.description"
      :id="idHero"
    />
    <BrowseCollection name="Most Popular" link="/MostPopular" :animeMostPopular="animeMostPopular"/>

    <BrowseCollection name="Recently Updated" link="/RecentlyUpdated" :animeUpdated="animeUpdated"/>
    <BrowseCollection name="Newest" link="/Newest" :animeNewest="animeNewest"/>
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
      idHero: "4",
      animeMostPopular: [{}, {}, {}, {}, {}, {}],
      animeUpdated: [{}, {}, {}, {}, {}, {}],
      animeNewest: [{}, {}, {}, {}, {}, {}]
    };
  },
  mounted: function() {
    let i = null;
    const arl = "https://kitsu.io/api/edge/anime/" + this.idHero;
    axios.get(arl).then(response => {
      //console.log(response.data.data.attributes);
      this.heroShow = response.data.data.attributes;
    });
    axios
      .get("https://kitsu.io/api/edge/anime?sort=-popularityRank")
      .then(response => {
        //console.log(response.data.data[1]);
        for (i = 0; i <= 5; i++) {
          this.animeMostPopular[i] = response.data.data[i];
        }
        //console.log( this.animeMostPopular)
      });
    axios
      .get("https://kitsu.io/api/edge/anime?sort=-updatedAt")
      .then(response => {
        for (i = 0; i <= 5; i++) {
          this.animeUpdated[i] = response.data.data[i];
        }
      });
    axios
      .get("https://kitsu.io/api/edge/anime?sort=-createdAt")
      .then(response => {
        for (i = 0; i <= 5; i++) {
          this.animeNewest[i] = response.data.data[i];
        }
      });
  }
};
</script>

<style>
</style>
