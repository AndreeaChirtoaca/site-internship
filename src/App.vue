<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
   created: function(){
   console.log("gdjd");
     axios.get("https://kitsu.io/api/edge/anime")
     .then(response => {
       console.log(response.data.data);
     })
    },
  methods:{
   
  }
};
</script>

<style>
</style>
