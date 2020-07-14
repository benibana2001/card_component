<template>
  <div class="card">
    <ul>
      <li>
        {{ message }}
      </li>
      <li>
        {{ itemName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    itemName: {
      type: String
    }
  },
  data() {
    return {
      message: "a"
    };
  }
};
</script>
