export const cardMixin = {
  data() {
    return {
      show: true
    };
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

  methods: {
    choice: function(event) {
      console.log(event);
      this.show = !this.show;
    },

    styleIndex(index) {
      return "left:" + String(index * 60) + "px";
    }
  }
};
