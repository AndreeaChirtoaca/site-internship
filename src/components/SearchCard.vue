<template>
  <div class="card">
    <div class="imageContainer">
      <img class="imageCard" :src="imageCard" />
    </div>
    <div class="textCard">
      <div class="title">{{ nameCard }}</div>

      <p class="description">{{ descriptionCard }}</p>
      <div id="more">
        <span>...</span>
      </div>

      <div class="buttonContainer">
        <button id="watch" @click="goToShowPage">Watch</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  props: {
    idCard: String,
    nameCard: String,
    imageCard: String,
    ratingCard: String,
    descriptionCard: String,
  },
  data: function () {
    return {};
  },
  methods: {
    goToShowPage() {
      this.$router.push({ path: "/ShowPage/" + this.idCard });
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  height: 7cm;
  margin: 7px;
  padding: 5px;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
}
.card:hover {
  box-shadow: 0 0 27px rgb(231, 166, 142);
  margin: 7px 0px 7px 0px;
}
.imageContainer {
  height: 100%;
  width: 50%;
  padding-top: 10px;
  padding-left: 10px;
}
.imageCard {
  object-fit: cover;
  height: 90%;
  width: 90%;
}
.textCard {
  height: 100%;
  width: 100%;
}
.title {
  margin-top: 5px;
  text-align: left;
  padding: 10px 0px 10px 5px;
  text-transform: uppercase;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 1cm;
  max-height: 2cm ;
  font-size: 23px;
  font-weight: bold;
}
.rating {
  padding: 0px 0px 10px 5px;
  color: rgb(216, 88, 42);
  font-weight: bold;
  font-size: 18px;
}
.description{
  --line-height: 20px;
  --n-of-lines: 4;
  --max-height: calc(var(--line-height)*var(--n-of-lines));
  margin: 0px;
  padding-left: 5px;
  line-height: var(--line-height);
  max-height:var(--max-height);
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px ;
}
#more{
padding-left: 10px;
font-weight: bold;
letter-spacing: 3px;
}
.buttonContainer {
  height: 3cm;
  width: 100%;
  text-align: left;
  padding-top: 15px;
  box-sizing: border-box;
}
#watch {
  font-family: Roboto;
  border: none;
  cursor: pointer;
  padding: 7px 10px;
  min-width: 130px;
  font-size: 16px;
  border-radius: 5px;
  background-color: rgb(226, 88, 37);
  line-height: 28px;
  color:rgba(236, 227, 227, 0.966);
}
#watch:hover {
  color: white;
}
</style>
