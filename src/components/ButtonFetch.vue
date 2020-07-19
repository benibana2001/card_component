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
import * as connectApi from "../api";

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
      await connectApi.fetchApi();
    },

    async clickPost() {
      console.log("clickPost!");
      const point = parseInt(this.point);
      console.log(point);
      await connectApi.postApi(point);
    }
  }
};
</script>

<style scoped></style>
