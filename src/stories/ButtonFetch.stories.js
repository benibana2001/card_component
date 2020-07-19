import ButtonFetch from "../components/ButtonFetch.vue";

export default { title: "ButtonFetch" };

export const asAComponent = () => ({
  components: { ButtonFetch: ButtonFetch },
  template: "<ButtonFetch />"
});
