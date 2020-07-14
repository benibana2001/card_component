import Card from "../components/Card.vue";

export default { title: "Card" };

export const withText = () => "<Card />";

export const asAComponent = () => ({
  components: { Card: Card },
  template: "<Card></Card>"
});
