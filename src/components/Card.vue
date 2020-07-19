<template>
  <transition name="fade">
    <div
      class="card"
      :style="styleIndex(index)"
      @click="choice(value)"
      v-if="show"
    >
      {{ value }}
    </div>
  </transition>
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
  data() {
    return {
      show: true
    };
  },

  computed: {},

  methods: {
    choice: function(event) {
      console.log(event);
      this.show = !this.show;
    },

    hoverCard: function(value) {
      console.log(value);
    },

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

  transition-property: margin, color, z-index;
  transition-duration: 0.5s;
}

.card:hover {
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
