<template>
  <div class="searchCollection">
    <div class="name">{{ name }}</div>
    <div class="cardsSection">
      <SearchCard
        v-for="(card, index) in cards"
        :key="index"
        :imageCard="card.image"
        :ratingCard="card.rating"
        :descriptionCard="card.description"
        :nameCard="card.title"
        :idCard="card.id"
      ></SearchCard>
    </div>
  </div>
</template>

<script>
import SearchCard from "./SearchCard";
export default {
  name: "SearchCollection",
  components: {
    SearchCard,
  },
  props: {
    name: String,
    cards: [],
  },
};
</script>

<style scoped>
.searchCollection {
  margin: 20px 20px 30px 20px;
  box-shadow: 0 0 27px grey;
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
  color: #ec7b3aea;
  margin-bottom: 5px;
}
@media screen and (max-width: 700px) {
  .cardsSection {
    display: flex;
    flex-wrap: wrap;
  }
  .searchCollection {
    box-shadow: 0 0 27px rgb(231, 166, 142);
  }
  .name {
    color: rgb(226, 88, 37);
  }
}
</style>
