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
import { cardMixin } from "../mixins/cardMixin";
export default {
  mixins: [cardMixin]
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
</style>
