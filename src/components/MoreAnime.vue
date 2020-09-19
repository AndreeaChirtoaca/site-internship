<template>
  <div class="moreAnime">
    <p id="ask">Looking for more anime?</p>
    <p id="suggest">Browse the rest of our catalog!</p>
    <div class="buttonContainer">
      <button id="browse" @click="goToBrowsePage">Browse</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreAnime",
  data: function() {
    return {};
  },
  methods: {
    goToBrowsePage: function() {
      this.$router.push({ path: "/BrowsePage" });
    }
  }
};
</script>

<style scoped>
.moreAnime {
  --background-color: rgb(150, 137, 137);
  background: var(--background-color);
  align-items: start;
  margin: 15px;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
  height: 6cm;
}
#ask {
  padding-top: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
}
#suggest {
  text-align: center;
  padding-top: 15px;
  font-size: 20px;
}
.buttonContainer {
  height: 3cm;
  width: 100%;
  text-align: center;
  padding-top: 25px;
  box-sizing: border-box;
}
#browse {
  font-family: Roboto;
  font-weight: normal;
  border: none;
  cursor: pointer;
  padding: 7px 10px;
  min-width: 130px;
  font-size: 16px;
  border-radius: 5px;
  background-color: rgb(226, 88, 37);
  line-height: 28px;
  color: white;
}
#browse:hover {
  text-decoration: underline;
}
</style>
