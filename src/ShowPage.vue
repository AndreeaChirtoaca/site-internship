<template>
  <div>
    <ShowPageHeader :trailer="trailer"></ShowPageHeader>
    <div>
      <ShowDescriptionCard
        :titleShow="dataShowCard.titleShow"
        :subtitleShow="dataShowCard.subtitleShow"
        :ratingShow="dataShowCard.ratingShow"
        :imageShow="dataShowCard.imageShow"
        :descriptionShow="dataShowCard.descriptionShow"
      ></ShowDescriptionCard>
    </div>
  </div>
</template>

<script>
import ShowPageHeader from "./components/ShowPageHeader";
import ShowDescriptionCard from "./components/ShowDescriptionCard";
export default {
  name: "ShowPage",
  components: {
    ShowPageHeader,
    ShowDescriptionCard
  },
  data: function() {
    return {
      trailer: "https://www.youtube.com/embed/2QTDcffpunY?list=RD2QTDcffpunY",
      dataShowCard: {
        titleShow: "Steins;Gate",
        subtitleShow: "SMTH",
        ratingShow: "4",
        imageShow:
          "https://funart.pro/uploads/posts/2019-12/1575953127_vrata-shtejna-0-steinsgate-0-anime-1.jpg",
        descriptionShow:
          "    Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past. However throughout their experimentation process, an organization named SERN who has been doing their own research on time travel tracks them down. Now it’s a careful game of cat and mouse to not get caught and moreover, try to survive.Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past."
      }
    };
  }
};
</script>

<style scoped>
</style>
