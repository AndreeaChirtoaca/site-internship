<template>
    <div>
    <SearchPageForm/>
    <div class="collection"></div>
  </div>
  </div>
</template>

<script>
import SearchPageForm from "./components/SearchPageForm"
export default {
  name: "SearchPage",
  components:{
    SearchPageForm
  },
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
  box-sizing: border-box;
  padding-top: 30px;
  background-color: rgb(150, 137, 137);
  display: 
}
.form {
  text-align: center;
  width: 100%;
}
.input {
  width: 50%;
  height: 0.8cm;
  background-color: rgb(243, 235, 235);
}
.buttonSearch {
  height: 0.8cm;

}
#icon {
  height: 100%;
}
.button{
text-align: center;
border: 2px solid black;
padding: 10px;

}
</style>
