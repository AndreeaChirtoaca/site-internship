<template>
  <div class="card">
    <div class="image">
      <router-link :to="{path: '/ShowPage/' +id}">
        <img class="cardImage" :src="imageShow">
      </router-link>
    </div>
    <div class="titleContainer">
      <router-link :to="{path: '/ShowPage/' +id}" class="title">{{nameShow}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrowseCard",
  data: function() {
    return {
      imageShow:
        "https://funart.pro/uploads/posts/2019-12/1575953127_vrata-shtejna-0-steinsgate-0-anime-1.jpg",
      id: 4,
      nameShow: "Steins;Gate"
    };
  }
};
</script>

<style scoped>
.card {
  margin: 5px;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 5px 6px 5px 0px rgba(2, 2, 2, 0.19);
  border: 2px solid black;
}
.card:hover {
  box-shadow: 5px 6px 5px 0px rgb(231, 166, 142);
}
.image {
  height: 80%;
}
.cardImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.titleContainer {
  //border: 1px solid black;
  height: 17%;
  padding-top: 10px;
}
.title {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 25px;
}
.title:hover {
  color: rgb(201, 77, 32);
}
</style>
