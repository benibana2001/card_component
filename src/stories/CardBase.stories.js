import CardBase from "../components/CardBase.vue";

export default { title: "CardBase" };

export const asAComponent = () => ({
  components: { CardBase: CardBase },
  template: "<CardBase :value='1' />"
});
