<template>
  <div>
    <SearchPageForm />
    <SearchCollection name="Series" :cards="tvList" />
    <SearchCollection name="Movies" :cards="moviesList" />
  </div>
</template>

<script>
import SearchPageForm from "./components/SearchPageForm";
import SearchCollection from "./components/SearchCollection";
export default {
  name: "SearchPage",
  components: {
    SearchPageForm,
    SearchCollection,
  },
  data: function () {
    return {};
  },
  computed: {
    tvList: function () {
      return this.$store.state.search.tvList;
    },
    moviesList: function () {
      return this.$store.state.search.moviesList;
    },
  },
};
</script>

<style scoped>
</style>
