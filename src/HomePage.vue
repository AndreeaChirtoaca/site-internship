<template>
  <div>
    <HeroSection
      :title="heroShow.title"
      :subtitle="heroShow.subtitle"
      :image="heroShow.image"
      :description="heroShow.description"
    />
  </div>
</template>

<script>
import HeroSection from "./components/HeroSection";
export default {
  name: "HomePage",
  components: {
    HeroSection
  },
  data: function() {
    return {
      heroShow: {
        title: "Steins;Gate",
        image:
          "https://funart.pro/uploads/posts/2019-12/1575953127_vrata-shtejna-0-steinsgate-0-anime-1.jpg",
        description:
          "Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past. However throughout their experimentation process, an organization named SERN who has been doing their own research on time travel tracks them down. Now it’s a careful game of cat and mouse to not get caught and moreover, try to survive.Steins; Gate follows an eclectic group of individuals who have the ability to send text messages to the past. However throughout their experimentation process, an organization named SERN who has been doing their own research on time travel tracks them down. Now it’s a careful game of cat and mouse to not get caught and moreover, try to survive"
      }
    };
  }
};
</script>

<style>
</style>
