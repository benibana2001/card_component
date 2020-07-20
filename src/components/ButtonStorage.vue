<template>
  <div class="buttons">
    <button class="buttonFetch" @click="clickGet">
      Get
    </button>

    <button class="buttonPost" @click="clickSet">
      Set
    </button>

    <input
      type="text"
      placeholder="ユーザー名を入力してローカルに保存"
      v-model="userName"
    />

    <button class="buttonDelete" @click="clickDelete">
      Delete
    </button>
  </div>
</template>

<script>
import storageApi from "../api/storage";
console.log(storageApi);

export default {
  name: "ButtonStorage",

  data() {
    return {
      userName: "",
      storageKey: "CARD_APP"
    };
  },

  methods: {
    async clickGet() {
      const data = storageApi.get(this.storageKey) || null;
      if (data && data.name) {
        alert("あなたの名前: " + data.name);
      } else {
        alert("名前が登録されていません。");
      }
    },

    async clickSet() {
      storageApi.set(this.storageKey, { name: this.userName });
    },

    async clickDelete() {
      storageApi.remove(this.storageKey);
      //   storageApi.clearAll();
    }
  }
};
</script>

<style scoped></style>
