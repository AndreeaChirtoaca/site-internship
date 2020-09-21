<template>
  <div class="heroSection">
    <div class="showImage">
      <div class="heroImageFrame">
        <img class="heroImage" :src="image">
      </div>
    </div>
    <div class="showText">
      <h1 id="title">{{title}}</h1>
      <div>
        <p class="description" :class="{seeAll: see}">{{description}}</p>
        <button class="seeMore" v-if="!see" @click="seeMore">...See more</button>
      </div>
      <button class="buttonHero" @click="goToShow()">Watch</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    title: String,
    subtitle: String,
    description: String,
    image: String,
    id: 4
  },
  data: function() {
    return {
      see: false
    };
  },
  methods: {
    goToShow: function() {
      this.$router.push({ path: "/ShowPage/" + this.id });
    },
    seeMore: function() {
      this.see = true;
    }
  }
};
</script>

<style scoped>
.heroSection {
  --background-color:rgb(150, 137, 137);
  padding: 10px;
  background: var(--background-color);
  display: flex;
  align-items: start;
  margin: 15px;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
  
}
.showText {
  text-align: left;
  padding: 25px 20px 20px 20px;
}
.heroImage {
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
.heroImageFrame {
  padding-top: 150%;
  height: 0;
  position: relative;
}
.showImage {
  margin: 0px;
  border-bottom: 2px solid black;
  padding: auto;
  flex: 0 0 200px;
  max-width: 200px;
}
#title{
  text-align: left;
  padding-left: 15px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-family: serif;
  font-size: 25px;
  font-weight: bold;
}
.description {
  --line-height: 20px;
  --n-of-lines: 4;
  --max-height: calc(var(--line-height)*var(--n-of-lines));
  padding-left: 10px;
  margin: 5px;
  max-width: 90%;
  line-height: var(--line-height);
  max-height: var(--max-height);
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px ;
}
.seeAll{
--n-of-lines: ;
}
.seeMore {
  padding-left: 10px;
  margin: 10px;
  cursor: pointer;
  color:  rgb(192, 72, 28);
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  border: none;
  background: var(--background-color);
}
.seeMore:hover{
color: rgba(226, 87, 37, 0.952)
}

.buttonHero {
  font-family: Roboto;
  font-weight: normal;
  border: none;
  cursor: pointer;
  padding: 7px 10px;
  min-width: 130px;
  margin-left: 15px;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: rgb(226, 88, 37);
  line-height: 28px;
  color: rgb(231, 224, 224);
}
.buttonHero:hover {
  color: white;
}
/*@media screen and (max-width: 500px){
.heroSection{
  flex-direction: column ;
}
.heroImageFrame{
padding:0px;
}
}*/
</style>
