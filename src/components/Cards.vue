<template>
  <div class="cards">
    <Card v-bind:itemName="abc"></Card>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      abc: "123"
    };
  }
};
</script>
