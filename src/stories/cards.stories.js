import Cards from "../components/Cards.vue";

export default { title: "Cards" };

export const asAComponent = () => ({
  components: { Cards: Cards },
  template: "<Cards />"
});
