<template>
  <div>
    <iframe
      class="trailerVideo"
      :src="trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "ShowPageHeader",
  props: {
    trailer: String
  }
};
</script>

<style scoped >
.trailerVideo {
  width: 100%;
  height: 13cm;
}
</style>
