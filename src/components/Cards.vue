<template>
  <div class="cards">
    <Card v-bind:value="1"></Card>
    <Card v-bind:value="3"></Card>
    <Card v-bind:value="5"></Card>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.cards {
  display: flex;
}
</style>
