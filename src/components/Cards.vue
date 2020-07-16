<template>
  <div class="cards">
    <Card v-for="(hand, i) in hands" :key="i" :value="hand" :index="i" />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import Card from "./Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      hands: [1, 2, 3, 5, 8, 13, 21, 34, 45]
    };
  }
};
</script>

<style scoped>
.cards {
  display: flex;
}
</style>
