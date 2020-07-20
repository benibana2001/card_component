import CardNoTransition from "../components/CardNoTransition.vue";

export default { title: "CardNoTransition" };

export const asAComponent = () => ({
  components: { CardNoTransition: CardNoTransition },
  template: "<CardNoTransition :value='1' />"
});
