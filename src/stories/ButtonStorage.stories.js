import ButtonStorage from "../components/ButtonStorage.vue";

export default { title: "ButtonStorage" };

export const asAComponent = () => ({
  components: { ButtonStorage: ButtonStorage },
  template: "<ButtonStorage/>"
});
