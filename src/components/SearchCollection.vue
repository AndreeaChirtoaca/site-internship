<template>
  <div class="searchCollection">
    <div class="name">NAME</div>
    <div class="cardsSection">
      <div v-for="card in cards">
        <SearchCard
          :imageCard="dataCard.imageCard"
          :ratingCard="dataCard.ratingCard"
          :descriptionCard="dataCard.descriptionCard"
          :nameCard="dataCard.nameCard"
          :idCard="dataCard.idCard"
        ></SearchCard>
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
      dataCard: {
        idCard: 4,
        nameCard: "Steins;Gate",
        ratingCard: 4,
        imageCard:
          "https://funart.pro/uploads/posts/2019-12/1575953127_vrata-shtejna-0-steinsgate-0-anime-1.jpg",
        descriptionCard:
          "Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past. However throughout their experimentation process, an organization named SERN who has been doing their own research on time travel tracks them down. Now it’s a careful game of cat and mouse to not get caught and moreover, try to survive.Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past."
      }
    };
  }
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
  color: grey;
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
