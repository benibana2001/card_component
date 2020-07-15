<template>
  <div class="card">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.card {
  width: 100px;
  height: 160px;
  background: #eeeeee;
  border-radius: 4px;
  color: #494949;
}
</style>
