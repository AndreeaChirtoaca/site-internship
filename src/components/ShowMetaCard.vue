<template>
  <div class="card">
    <div class="imageContainer">
      <img class="image" :src="image" />
    </div>
    <div class="info">
      <p id="name">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowMetaCard",

  props: {
    image: String,
    name: String,
    description: String,
  },
  computed: {
    descriptionProp() {
      return;
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: ;
  margin: 5px;
  padding: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
  width: 24.2%;
  height: 5cm;
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
  height: 150%;
  width: 100%;
  object-fit: cover;
}
.info {
  width: 25%;
  align-items: center;
}
#name {
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-size: 24px;
  font-weight: bold;
  padding: 30px 10px 10px 30px;
}
#descriptionBox {
  line-height: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
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
