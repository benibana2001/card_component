<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <CardBase class="front" :value="value" :index="index" />

      <CardBase class="back" :value="999" :index="index" />
    </div>
  </div>
</template>
<script>
import CardBase from "./CardBase";
export default {
  components: {
    CardBase
  },

  props: {
    value: {
      type: Number,
      required: true
    },
    index: {
      type: Number
    }
  },

  data() {
    return {
      show: true
    };
  },

  methods: {
    choice: function(event) {
      console.log(event);
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100px;
  height: 100%;
  background-color: transparent;
  perspective: 1000px;
}

.wrapper-inner {
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.wrapper:hover .wrapper-inner {
  transform: rotateY(180deg);
}

.front .back {
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.front {
  background-color: #bbb;
  color: black;
}

.back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>
