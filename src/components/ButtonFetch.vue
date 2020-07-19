<template>
  <button class="buttonFetch" @click="clickFetch">
    fetch
  </button>
</template>

<script>
const axios = require("axios");
const url = "http://localhost:3000/player";

const fetchApi = async () =>
  await axios
    .get(url)
    .then(successFunc)
    .catch(errorFunc);

const successFunc = res => {
  console.log(res.data);
};

const errorFunc = err => {
  console.log(err);
};

export default {
  nama: "ButtonFetch",

  data() {
    return {};
  },

  methods: {
    async clickFetch() {
      console.log("clickFetch!");
      await fetchApi();
      console.log("hello");
    }
  }
};
</script>

<style scoped></style>
