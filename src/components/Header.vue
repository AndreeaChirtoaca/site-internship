<template>
  <header class="header-style">
    <router-link to="/">
      <div class="blockForImage">
        <img class="logo" src="../assets/pika.jpg">
      </div>
    </router-link>
    <router-link to="/MostPopular" class="link">Most Popular</router-link>
    <router-link to="/Newest" class="link">Newest</router-link>
    <router-link to="/RecentlyUpdated" class="link">Recently Updated</router-link>
    <router-link to="/SearchPage">
      <div class="blockForImage">
        <img id="icon" src="../assets/search.png">
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
  width: 140px;
  height: auto;
  padding-left: 10px;
  padding-bottom: 10px;
  //box-sizing: border-box;
}
#icon {
  width: 40px;
  height: auto;
  margin: 18px;
}
.link {
  color: grey;
  text-align: center;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  margin: 20px;
  color: rgb(219, 83, 34);
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
}
.link:hover {
  text-decoration: underline;
  color: rgb(219, 83, 34);
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
    margin: 5px;
    padding-bottom: 5px;
  }
  .blockForImage {
    text-align: center;
  }
}
</style>
