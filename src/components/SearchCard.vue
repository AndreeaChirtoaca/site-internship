<template>
  <div class="card">
    <div class="imageContainer">
      <img class="imageCard" :src="image">
    </div>
    <div class="textCard">ejdewidegw</div>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  data: function() {
    return {
      image:
        "https://funart.pro/uploads/posts/2019-12/1575953127_vrata-shtejna-0-steinsgate-0-anime-1.jpg"
    };
  }
};
</script>

<style scoped>
.card {
  display: flex;
  height: 7cm;
  margin: 7px;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
}
.card:hover {
  box-shadow: 5px 6px 5px 0px rgb(231, 166, 142);
}
.imageContainer {
  height: 100%;
  width: 50%;
  padding: 5px;
}
.imageCard {
  object-fit: cover;
  height: 90%;
  width: 90%;
}
</style>
