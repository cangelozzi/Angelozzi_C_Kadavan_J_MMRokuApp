import InitHeaderComponent from "./layout/InitialHeaderComponent";
import SelectionComponent from "./layout/SelectionComponent";
import HeroComponent from "./layout/HeroComponent";
import FooterComponent from "./layout/FooterComponent";

export default {
  template: `
    <section>
      <InitHeaderComponent />
      <SelectionComponent />
      <HeroComponent />
      <FooterComponent />
    </section>
  `,

  data() {
    return {};
  },

  methods: {},

  components: {
    InitHeaderComponent,
    SelectionComponent,
    HeroComponent,
    FooterComponent
  }
};
