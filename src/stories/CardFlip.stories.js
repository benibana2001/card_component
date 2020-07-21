import CardFlip from "../components/CardFlip.vue";

export default { title: "CardFlip" };

export const asAComponent = () => ({
  components: { CardFlip: CardFlip },
  template: "<CardFlip :value='1' />"
});
