<template>
  <div class="cards">
    <Card v-for="hand in hands" :key="hand.index" :value="hand" />
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
      hands: [1, 3, 5]
    };
  }
};
</script>

<style scoped>
.cards {
  display: flex;
}
</style>
