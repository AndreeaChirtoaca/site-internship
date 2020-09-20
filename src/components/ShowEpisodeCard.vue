<template>
  <div class="card">
    <div class="imageContainer">
      <img class="imageEpisode" :src="image">
    </div>
    <div class="info">
      <p id="title">{{title}}</p>
      <p id="episode">Season:{{season}} Episode:{{ep}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowEpisodeCard",
  props: {
    image: String,
    title: String,
    ep: Number,
    season: Number
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.card {
  margin: 5px;
  padding: 2px;
  flex-direction: row;
  width: 24.3%;
  height: 7cm;
  box-sizing: border-box;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
}
.card:hover {
  box-shadow: 0 0 27px rgba(216, 88, 42, 0.774);
}

.imageContainer {
  width: auto;
  height: 5cm;
  padding: 5px;
}
.imageEpisode {
  height: 5cm;
  width: 100%;
  object-fit: cover;
}
#title {
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  padding: 10px 3px 2px 8px;
}
#episode {
  font-size: 12px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  letter-spacing: 1px;
  padding: 8px;
}
</style>
