<template>
  <div>
    <div class="BrowseCollection">
      <div class="name">
        <router-link :to="link" class="link">{{name}}</router-link>
      </div>
      <div class="cards">
        <BrowseCard
          v-for="(card,index) in cards"
          :key="index"
          :nameCard="card.attributes.canonicalTitle"
          :idCard="card.id"
          :imageCard="card.attributes.posterImage.original"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BrowseCard from "./BrowseCard.vue";
export default {
  name: "BrowseCollection",
  components: {
    BrowseCard
  },
  props: {
    name: String,
    link: "",
    animeMostPopular: null,
    animeUpdated: null,
    animeNewest: null
  },
  data: function() {
    return {
      internalName: this.name,
      cards: [{}, {}, {}, {}, {}, {}]
    };
  },
  created: function() {
    let i = null;
    if (this.internalName === "Most Popular") {
      axios
        .get("https://kitsu.io/api/edge/anime?sort=-popularityRank")
        .then(response => {
          for (i = 0; i <= 5; i++) {
            this.cards[i] = response.data.data[i];
          }
        });
    } else if (this.internalName === "Recently Updated") {
      axios
        .get("https://kitsu.io/api/edge/anime?sort=-updatedAt")
        .then(response => {
          for (i = 0; i <= 5; i++) {
            this.cards[i] = response.data.data[i];
          }
        });
    } else if (this.internalName === "Newest") {
      axios
        .get("https://kitsu.io/api/edge/anime?sort=-createdAt")
        .then(response => {
          for (i = 0; i <= 5; i++) {
            this.cards[i] = response.data.data[i];
          }
        });
    }
  }
};
</script>

<style scoped>
.BrowseCollection {
  background-color: white;
  width: auto;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
  margin: 15px;
  text-align: center;
  box-sizing: border-box;
}
.link {
  font-size: 30px;
  color: rgb(226, 88, 37);
  cursor: pointer;
  font-weight: bold;
  margin: 10px;
  text-decoration: none;
}
.link:hover {
  text-shadow: 3px 2px rgb(167, 158, 158);
}
.name {
  height: 10%;
  margin: 5px;
  padding-left: 15px;
  padding-top: 10px;
}

.cards {
  display: flex;
  height: auto;
  width: auto;
  margin: 5px;
  align-items: center;
  box-sizing: border-box;
}
@media screen and (max-width: 500px) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    width: auto;
  }
  .BrowseCollection {
    box-shadow: 0 0 17px rgb(231, 166, 142);
  }
}
</style>
