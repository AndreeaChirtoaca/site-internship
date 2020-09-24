<template>
  <div class="categoryPage">
    <div class="categoryName">
      <h1>Newest</h1>
    </div>
    <div class="categoryList">
      <div>
        <SearchCard
          v-for="(card,index) in allCards"
          :key="index"
          :nameCard="card.attributes.canonicalTitle"
          :imageCard="card.attributes.posterImage.original"
          :idCard="card.id"
          :ratingCard="card.attributes.ratingRank"
          :descriptionCard="card.attributes.synopsis"
        ></SearchCard>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchCard from "./components/SearchCard";
export default {
  name: "Newest",
  data: function() {
    return {
      allCards: null
    };
  },
  created: function() {
    axios
      .get("https://kitsu.io/api/edge/anime?sort=createdAt")
      .then(response => {
        this.allCards = response.data.data;
      });
  },
  components: {
    SearchCard
  }
};
</script>

<style scoped>
.categoryName {
  text-align: center;
  border: 1px solid black;
  height: 2cm;
  background-color: rgba(150, 137, 137, 0.829);
}
.categoryList {
  margin: 10px 20px 10px 20px;
  box-shadow: 0 0 27px rgb(231, 166, 142);
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px 5px 0px 5px;
}
</style>

