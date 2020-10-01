<template>
  <div>
    <div class="BrowseCollection">
      <div class="name">
        <router-link :to="link" class="link">{{ name }}</router-link>
      </div>

      <div class="cards">
        <BrowseCard
          v-for="card in allCards"
          :key="card.id"
          :nameCard="card.title"
          :idCard="card.id"
          :imageCard="card.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BrowseCard from "./components/BrowseCard.vue";
export default {
  name: "BrowseCollection",
  components: {
    BrowseCard,
  },
  props: {
    name: String,
    link: String,
  },
  data: function () {
    return {
      internalName: this.name,
      allCards: [],
    };
  },
  computed: {
    popularCards: function () {
      return this.$store.state.browseCollection.popular;
    },
    newestCards: function () {
      return this.$store.state.browseCollection.newest;
    },
    updatedCards: function () {
      return this.$store.state.browseCollection.updated;
    },
  },
  created: function () {
    if (this.internalName === "Most Popular") {
      this.$store.dispatch("fetch6popular");
      this.allCards = this.popularCards;
    }
    if (this.internalName === "Newest") {
      this.$store.dispatch("fetch6newest");
      this.allCards = this.newestCards;
    }
    if (this.internalName === "Recently Updated") {
      this.$store.dispatch("fetch6updated");
      this.allCards = this.updatedCards;
    }
  },
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
