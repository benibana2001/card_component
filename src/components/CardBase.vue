<template>
  <div class="card" :style="styleIndex(index)">
    {{ value }}
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    index: {
      type: Number
    }
  },

  methods: {
    styleIndex(index) {
      return "left:" + String(index * 60) + "px";
    }
  }
};
</script>

<style scoped>
.card {
  position: absolute;

  width: 100px;
  height: 160px;
  background: #eeeeee;
  border-radius: 6px;
  color: #494949;
  margin-right: 2px;

  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.4));
}
</style>
