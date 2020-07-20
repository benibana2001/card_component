import ButtonDb from "../components/ButtonDb.vue";

export default { title: "ButtonDb" };

export const asAComponent = () => ({
  components: { ButtonDb: ButtonDb },
  template: "<ButtonDb/>"
});
