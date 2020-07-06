// import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";

export default { title: "HelloWorld" };

export const withText = () => "<HelloWorld></HelloWorld>";

export const asAComponent = () => ({
  components: { HelloWorld: HelloWorld },
  template: "<HelloWorld></HelloWorld>"
});
