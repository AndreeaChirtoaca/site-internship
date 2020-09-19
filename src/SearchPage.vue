<template>
  <div>
    <SearchPageForm/>
    <SearchCollection/>
    <SearchCollection/>
  </div>
</template>

<script>
import SearchPageForm from "./components/SearchPageForm";
import SearchCollection from "./components/SearchCollection";
export default {
  name: "SearchPage",
  components: {
    SearchPageForm,
    SearchCollection
  },
  data: function() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>
</style>
