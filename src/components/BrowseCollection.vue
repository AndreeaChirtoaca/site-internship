<template>
  <div class="BrowseCollection">
    <div class="blockForLink">
      <router-link to="/MostPopular" class="link">Most Popular</router-link>
    </div>
    <div class="cards">
      <BrowseCard/>
      <BrowseCard/>
      <BrowseCard/>
      <BrowseCard/>
      <BrowseCard/>
      <BrowseCard/>
    </div>
  </div>
</template>

<script>
import BrowseCard from "./BrowseCard.vue";
export default {
  name: "BrowseCollection",
  components: {
    BrowseCard
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.BrowseCollection {
  background-color: white;
  height: 350px;
  border: 2px solid black;
}
.link {
  color: black;
  text-align: left;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  font-size: 17px;
  margin: 10px;
}
.blockForLink {
  padding: 10px;
  height: 5%;
}
.link:hover {
  text-decoration: underline;
}
.cards {
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
