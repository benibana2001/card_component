<template>
  <div class="card" @click="choice(value)">
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
  },
  methods: {
    choice: function(event) {
      console.log(event);
    }
  }
};
</script>

<style scoped>
.card {
  width: 100px;
  height: 160px;
  background: #eeeeee;
  border-radius: 6px;
  color: #494949;
  margin-right: 2px;
}
</style>
