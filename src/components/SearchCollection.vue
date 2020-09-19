<template>
  <div class="searchCollection">
    <div class="name">NAME</div>
    <div class="cardsSection">
      <div v-for="card in cards">
        <SearchCard></SearchCard>
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
      cards: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>

<style scoped>
.searchCollection {
  margin: 20px;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
}
.cardsSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 5px;
}
.name {
  border-top: 2px solid rgb(238, 110, 63);
  text-align: left;
  padding-left: 15px;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: bold;
  color: grey;
  margin-bottom: 5px;
}
</style>
