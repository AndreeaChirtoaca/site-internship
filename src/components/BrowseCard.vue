<template>
  <div class="card">
    <div class="image">
      <router-link :to="{ path: '/ShowPage/' + idCard }">
        <img class="cardImage" :src="imageCard" />
      </router-link>
    </div>
    <div class="titleContainer">
      <router-link :to="{ path: '/ShowPage/' + idCard }" class="title">{{
        nameCard
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrowseCard",
  props: {
    idCard: String,
    nameCard: String,
    imageCard: String,
  },
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
   --line-height: 20px;
  --n-of-lines: 4;
  --max-height: calc(var(--line-height)*var(--n-of-lines));
  text-decoration: none;
  color: black;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-weight: bold;
  line-height: var(--line-height);
  max-height: var(--max-height);
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
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
