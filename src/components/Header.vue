<template>
  <header class="header-style">
    <router-link to="/">
      <div class="blockForImage">
        <img class="logo" src="https://www.soda.com/wp-content/uploads/2020/06/crunchyroll.jpg">
      </div>
    </router-link>
    <router-link to="/MostPopular" class="link">Most Popular</router-link>
    <router-link to="/Newest" class="link">Newest</router-link>
    <router-link to="/RecentlyUpdated" class="link">Recently Updated</router-link>
    <router-link to="/SearchPage">
      <div class="blockForImage">
        <img id="icon" src="https://img.icons8.com/metro/26/000000/search.png">
      </div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header-style {
  padding: 5px 5px;
  background: white;
  box-shadow: 0px 0px 27px rgba(82, 67, 67, 0.5);
  grid-area: header-style;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr 1fr;
  box-sizing: border-box;
}
.logo {
  width: 160px;
  height: auto;
  box-sizing: border-box;
}
#icon {
  width: 20px;
  height: auto;
  margin: 25px;
}
.link {
  color: grey;
  text-align: center;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  font-size: 17px;
  margin: 20px;
}
.link:hover {
  text-decoration: underline;
}
#search-button {
  height: 30px;
  width: 30px;
  border: none;
  margin: 20px;
  background-color: white;
}
@media screen and (max-width: 500px) {
  .header-style {
    padding: 0px;
    grid-template-columns: 100%;
    grid-template-rows: 1fr, 1fr, 1fr, 1fr;
  }
  .link {
    margin: 10px;
  }
  .blockForImage {
    text-align: center;
  }
}
</style>
