<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <CardBase :value="value" :index="index" />
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
  /* transition-property: z-index, opacity; */
  /* transition-duration: 0.2s; */
}

.wrapper-inner {
  width: 100px;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.wrapper:hover .wrapper-inner {
  transform: rotateY(180deg);
  /* z-index: 100; */
  /* opacity: 0.5; */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
