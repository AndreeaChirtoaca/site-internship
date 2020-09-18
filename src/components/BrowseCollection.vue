<template>
  <div>
    <div class="BrowseCollection">
      <div class="name">
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
    <div class="BrowseCollection">
      <div class="name">
        <router-link to="/Newest" class="link">Newest</router-link>
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
    <div class="BrowseCollection">
      <div class="name">
        <router-link to="/RecentlyUpdated" class="link">Recently Updated</router-link>
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
  </div>
</template>

<script>
import BrowseCard from "./BrowseCard.vue";
export default {
  name: "BrowseCollection",
  components: {
    BrowseCard
  },
  props: {
    name: String
  },
  data: function() {
    return {
      cardsMostPupular: [
        {
          title: "1episode",
          imageURL: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.BrowseCollection {
  background-color: white;
  height: 400px;
  //border: 2px solid black;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
  margin: 15px;
  text-align: center;
  box-sizing: border-box;
}
.link {
  font-size: 30px;
  //color: grey;
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
  //border: 2px solid black;
  margin: 5px;
  padding-left: 15px;
  padding-top: 10px;
}

.cards {
  display: flex;
  height: 80%;
  //border: 2px solid black;
  margin: 5px;
  align-items: center;
  box-sizing: border-box;
}
</style>
