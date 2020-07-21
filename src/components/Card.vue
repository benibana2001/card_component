<template>
  <transition name="fade">
    <div class="wrapper" @click="choice(value)" v-if="show">
      <CardBase :value="value" :index="index" />
    </div>
  </transition>
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
  transition-property: margin, color, z-index;
  transition-duration: 0.5s;
}

.wrapper:hover {
  margin-top: -40px;
  color: green;
  z-index: 100;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
