<template>
  <div class="card">
    <div class="imageContainer">
      <img class="imageEpisode" :src="imageEpisode" />
    </div>
    <div class="info">
      <p id="title">{{ canonicalTitle }}</p>
      <p id="episode">Season:{{ seasonNumber }} Episode:{{ number }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowEpisodeCard",
  props: {
    idEpisode: String,
    canonicalTitle: String,
    seasonNumber: Number,
    number: Number,
    imageEpisode: String,
  },
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.card {
  margin: 5px;
  padding: 2px;
  flex-direction: row;
  width: 24.2%;
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
  padding: 5px 3px 2px 8px;
}
#episode {
  font-size: 12px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  letter-spacing: 1px;
  padding: 8px;
}
@media screen and (max-width: 700px) {
  .card {
    width: 99%;
  }
}
</style>
