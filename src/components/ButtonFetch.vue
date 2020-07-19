<template>
  <div class="buttons">
    <button class="buttonFetch" @click="clickFetch">
      fetch
    </button>

    <button class="buttonPost()" @click="clickPost">
      post
    </button>

    <input type="text" placeholder="ポイントを入力してポスト" v-model="point" />
  </div>
</template>

<script>
const axios = require("axios");
const url = "http://localhost:3000/player";

const fetchApi = async () => {
  const successFunc = res => {
    console.log(res.data);
  };

  const errorFunc = err => {
    console.log(err);
  };

  await axios
    .get(url)
    .then(successFunc)
    .catch(errorFunc);
};

const postApi = async point => {
  const successFunc = res => {
    console.log(res.data);
  };

  const errorFunc = err => {
    console.log(err);
  };
  axios
    .post(url, {
      name: "Tanaka Taichi",
      age: 24,
      connecting: true,
      point: point
    })
    .then(successFunc)
    .catch(errorFunc);
};

export default {
  nama: "ButtonFetch",

  data() {
    return {
      point: 0
    };
  },

  methods: {
    async clickFetch() {
      console.log("clickFetch!");
      await fetchApi();
    },

    async clickPost() {
      console.log("clickPost!");
      const point = parseInt(this.point);
      console.log(point);
      await postApi(point);
    }
  }
};
</script>

<style scoped></style>
