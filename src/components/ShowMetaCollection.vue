<template>
  <div class="collection">
    <h2 id="cast">CAST</h2>
    <div class="metaCollection">
      <ShowMetaCard></ShowMetaCard>
      <ShowMetaCard></ShowMetaCard>
      <ShowMetaCard></ShowMetaCard>
      <ShowMetaCard></ShowMetaCard>
    </div>
  </div>
</template>

<script>
import ShowMetaCard from "./ShowMetaCard";
export default {
  name: "ShowMetaCollection",
  components: {
    ShowMetaCard
  },
  props: {
    idShow: String
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.collection {
  height: auto;
  margin: 20px 28px 10px 28px;
  box-shadow: 0 0 27px rgba(56, 50, 50, 0.5);
}
#cast {
  color: rgb(216, 88, 42);
  padding-left: 10px;
  padding-top: 10px;
}
.metaCollection {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>