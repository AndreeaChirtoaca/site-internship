<template>
  <div class="card">
    <div class="imageContainer">
      <img class="imageCard" :src="imageShow" />
    </div>
    <div class="textCard">
      <div class="title">{{ titleShow }}</div>
      <div class="subtitle">{{ subtitleShow }}</div>

      <p class="description">{{ descriptionShow }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowDescriptionCard",
  props: {
    titleShow: String,
    subtitleShow: String,
    ratingShow: Number,
    imageShow: String,
    descriptionShow: String,
  },
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.card {
  display: flex;
  height: 10cm;
  margin: 5px 28px 5px 28px;
  padding: 5px;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
}

.imageContainer {
  height: 100%;
  position: relative;
  width: 30%;
  padding-top: 10px;
  padding-left: 20px;
}
.imageCard {
  object-fit: cover;
  height: 9cm;
  position: absolute;
  left: 30;
  top: 40;
}
.textCard {
  height: 100%;
  width: 100%;
}
.title {
  margin: 3px 0px 5px 3px;
  padding: 10px 0px 0px 5px;
  text-transform: uppercase;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
}
.subtitle {
  margin: 0px 0px 20px 8px;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 20px;
}
.rating {
  padding: 0px 0px 20px 5px;
  color: rgb(216, 88, 42);
  font-weight: bold;
  font-size: 20px;
}
.description {
  margin: 10px;
  padding-left: 5px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
}
@media screen and (max-width: 700px) {
  .card {
    display: flex;
    flex-direction: column;
    height: auto;
    padding-bottom: 30px;
  }

  .imageContainer {
    width: 100%;
    padding-left: 28px;
  }
  .imageCard {
    position: static;
  }
  .textCard {
    text-align: center;
  }
}
</style>
