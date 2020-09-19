<template>
  <div class="searchCollection">
    <div class="name">NAME</div>
    <div class="cardsSection">
      <div v-for="card in cards">
        <SearchCard :ratingCard="ratingCard" :descriptionCard="descriptionCard"></SearchCard>
      </div>
    </div>
  </div>
</template>

<script>
import SearchCard from "./SearchCard";
export default {
  name: "SearchCollection",
  components: {
    SearchCard
  },
  data: function() {
    return {
      cards: [1, 2, 3, 4, 5, 6],
      nameCard: "Steins;Gate",
      ratingCard: 4,
      descriptionCard:
        "Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past. However throughout their experimentation process, an organization named SERN who has been doing their own research on time travel tracks them down. Now it’s a careful game of cat and mouse to not get caught and moreover, try to survive.Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past."
    };
  }
};
</script>

<style scoped>
.searchCollection {
  margin: 20px 20px 30px 20px;
  box-shadow: 0 0 27px rgb(231, 166, 142);
}
.cardsSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 5px;
}
.name {
  text-align: left;
  padding-left: 15px;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: bold;
  color: grey;
  margin-bottom: 5px;
}
</style>
