<template>
  <div class="buttons">
    <button class="buttonFetch" @click="clickFetch">
      fetch
    </button>

    <button class="buttonPost()" @click="clickPost">
      post
    </button>

    <input type="text" placeholder="ポイントを入力してポスト" v-model="point" />

    <br />

    <button class="buttonPolling" @click="clickPolling">
      polling
    </button>

    <button class="buttonStopPolling" @click="clickStopPolling">
      stop-polling
    </button>
  </div>
</template>

<script>
import * as connectApi from "../api/db";

export default {
  name: "ButtonDb",

  data() {
    return {
      point: 0,
      intervalId: ""
    };
  },

  methods: {
    async clickFetch() {
      await connectApi.fetchApi();
    },

    async clickPost() {
      const point = parseInt(this.point);
      await connectApi.postApi(point);
    },

    async clickPolling() {
      const func = connectApi.fetchApi;
      const span = 500;
      this.intervalId = connectApi.polling(func, span);
    },

    async clickStopPolling() {
      clearInterval(this.intervalId);
    }
  }
};
</script>

<style scoped></style>
