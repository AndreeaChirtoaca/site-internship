<template>
  <form class="searchForm" @submit.prevent="onSubmit(search)">
    <input
      class="input"
      type="text"
      v-model="search"
      placeholder="Search anime.."
    />
    <span class="buttonContainer">
      <button type="submit">
        <img
          id="icon"
          src="https://img.icons8.com/metro/26/000000/search.png"
        />
      </button>
    </span>
  </form>
</template>

<script>
export default {
  name: "SearchPageForm",
  data: function () {
    return {
      search: "",
    };
  },
  methods: {
    onSubmit(search) {
      this.$store.dispatch("handleSearch", search);
    },
  },
};
</script>

<style scoped>
.searchForm {
  height: 2.5cm;
  text-align: center;
  padding-top: 25px;
  padding-left: 30%;
  background-color: rgb(150, 137, 137);
  display: flex;
  box-sizing: border-box;
}

.input {
  width: 50%;
  height: 0.8cm;
  background-color: rgb(243, 235, 235);
}

#icon {
  height: 100%;
}
.buttonContainer {
  height: 100%;
}
</style>
