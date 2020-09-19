<template>
  <div class="categoryPage">
    <div class="categoryName">
      <h1>{{categoryName}}</h1>
    </div>
    <div class="categoryList">
      <div v-for="card in cards">
        <SearchCard :ratingCard="ratingCard" :descriptionCard="descriptionCard"></SearchCard>
      </div>
    </div>
  </div>
</template>

<script>
import SearchCard from "./components/SearchCard";
export default {
  name: "CategoryPage",
  data: function() {
    return {
      categoryName: "Newest",
      cards: [1, 2, 3, 4, 5, 6],
      ratingCard: 4,
      descriptionCard:
        "Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past. However throughout their experimentation process, an organization named SERN who has been doing their own research on time travel tracks them down. Now it’s a careful game of cat and mouse to not get caught and moreover, try to survive.Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past."
    };
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
  height: 2, 5cm;
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
