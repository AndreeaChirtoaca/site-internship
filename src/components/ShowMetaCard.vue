<template>
  <div class="card">
    <div class="imageContainer">
      <img class="image" :src="image" />
    </div>
    <div class="info">
      <p id="name">{{ name }}</p>
      <div id="descriptionBox">
        <p id="description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowMetaCard",

  data: function () {
    return {
      image:
        "https://funart.pro/uploads/posts/2019-12/1575953127_vrata-shtejna-0-steinsgate-0-anime-1.jpg",
      name: "hegefrgq3",
      description: "wekfre",
    };
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
  width: 48.9%;
  height: 3cm;
}
.card:hover {
  box-shadow: 0 0 27px rgba(216, 88, 42, 0.774);
}
.imageContainer {
  width: 30%;
  height: 3cm;
  padding: 5px;
}
.image {
  height: 2.5cm;
  width: 100%;
  object-fit: cover;
}
.info {
  width: 50%;
  padding: 5px;
}
#name {
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-weight: bold;
  padding-bottom: 10px;
}
#descriptionBox {
  height: 2.5cm;
  line-height: 18px;
  padding: 5px;
  width: 90%;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
}
@media screen and (max-width: 700px) {
  .card {
    width: 46.8%;
  }
}
</style>
