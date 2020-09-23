<template>
  <div class="card">
    <div class="image">
      <router-link :to="{path: '/ShowPage/' +id}">
        <img class="cardImage" :src="imageCard">
      </router-link>
    </div>
    <div class="titleContainer">
      <router-link :to="{path: '/ShowPage/' +id}" class="title">{{nameCard}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrowseCard",
  props: {
    idCard: String,
    nameCard: String,
    imageCard: String
  },
  data: function() {
    return {
      imageShow:
        "https://funart.pro/uploads/posts/2019-12/1575953127_vrata-shtejna-0-steinsgate-0-anime-1.jpg",
      id: this.idCard,
      nameShow: "Steins;Gate"
    };
  }
};
</script>

<style scoped>
.card {
  width: 16%;
  margin: 5px;
  height: 320px;
  box-sizing: border-box;
  box-shadow: 5px 6px 5px 0px rgba(2, 2, 2, 0.19);
}
.card:hover {
  box-shadow: 0 0 27px rgb(231, 166, 142);
}
.image {
  height: 70%;
  padding: 5px;
}
.cardImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.titleContainer {
  height: 27%;
  padding: 12px 10px 10px 10px;
  width: 96.5%;
}
.title {
  text-decoration: none;
  color: black;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-weight: bold;
  font-size: 20px;
  max-height: 2cm;
  overflow: hidden;
  width: 100%;
}
.title:hover {
  color: rgb(201, 77, 32);
}
@media screen and (max-width: 700px) {
  .card {
    width: 100%;
  }
}
</style>
