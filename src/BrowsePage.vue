<template>
  <div class="browsePage">
    <div class="title">
      <h1>Anime</h1>
    </div>
    <div class="list">
      <div v-for="card in cards">
        <SearchCard
          :nameCard="dataCard.nameCard"
          :imageCard="dataCard.imageCard"
          :idCard="dataCard.idCard"
          :ratingCard="dataCard.ratingCard"
          :descriptionCard="dataCard.descriptionCard"
        ></SearchCard>
      </div>
    </div>
  </div>
</template>

<script>
import SearchCard from "./components/SearchCard";
export default {
  name: "BrowsePage",
  components: {
    SearchCard
  },
  data: function() {
    return {
      categoryName: "Newest",
      cards: [1, 2, 3, 4, 5, 6],
      dataCard: {
        nameCard: "Steins;Gate",
        idCard: 3,
        imageCard:
          "https://funart.pro/uploads/posts/2019-12/1575953127_vrata-shtejna-0-steinsgate-0-anime-1.jpg",
        ratingCard: 4,
        descriptionCard:
          "Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past. However throughout their experimentation process, an organization named SERN who has been doing their own research on time travel tracks them down. Now it’s a careful game of cat and mouse to not get caught and moreover, try to survive.Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past."
      }
    };
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  border: 1px solid black;
  height: 2cm;
  background-color: rgba(150, 137, 137, 0.829);
}
.list {
  margin: 10px 20px 10px 20px;
  box-shadow: 0 0 27px rgb(231, 166, 142);
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px 5px 0px 5px;
}
</style>
