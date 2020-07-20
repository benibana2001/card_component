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
import * as connectApi from "../api/db";

export default {
  name: "ButtonDb",

  data() {
    return {
      point: 0
    };
  },

  methods: {
    async clickFetch() {
      await connectApi.fetchApi();
    },

    async clickPost() {
      const point = parseInt(this.point);
      await connectApi.postApi(point);
    }
  }
};
</script>

<style scoped></style>
