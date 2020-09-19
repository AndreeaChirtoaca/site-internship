<template>
  <form class="searchForm">
    <input class="input" type="text" v-model="search" placeholder="Search anime..">
    <span class="buttonContainer">
      <button>
        <img id="icon" src="https://img.icons8.com/metro/26/000000/search.png">
      </button>
    </span>
  </form>
</template>

<script>
export default {
  name: "SearchPageForm",
  data: function() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>
.searchForm {
  height: 2.5cm;
  border: 2px solid black;
  text-align: center;
  padding-top: 17px;
  padding-left: 30%;
  background-color: rgb(150, 137, 137);
  display: flex;
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
