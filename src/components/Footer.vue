<template>
  <footer class="footer">
    <p>
      Internship 2020
      <span>Crunchyroll Moldova</span>
    </p>
    <router-link to="/">
      <div class="blockForImage">
        <img class="logo" src="../assets/pika.jpg">
      </div>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: function() {
    return {};
  }
};
</script>

<style scoped>
body {
  height: 100%;
  width: 100%;
  margin: 0px;
}
.footer {
  background-color: white;
  padding: 40px;
}
.footer p {
  text-align: center;
  width: 100%;
  height: 20px;
  color: #979797;
  font-family: "Roboto", sans-serif;
}

.footer p span {
  margin-left: 3px;
  font-weight: bold;
}
.logo {
  width: 150px;
  height: auto;
  box-sizing: border-box;
}
.blockForImage {
  text-align: center;
  padding-top: 10px;
}
@media screen and (max-width: 500px) {
  .footer {
    text-align: center;
    align-items: center;
  }
  .footer p {
    flex-direction: column;
  }
}
</style>
