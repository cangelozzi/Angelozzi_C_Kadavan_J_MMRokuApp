import HeaderComponent from "./layout/HeaderComponent";
import SelectionComponent from "./layout/SelectionComponent";
import HeroComponent from "./layout/HeroComponent";
import FooterComponent from "./layout/FooterComponent";

export default {
  template: `
    <section>
      <HeaderComponent />
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
    HeaderComponent,
    SelectionComponent,
    HeroComponent,
    FooterComponent
  }
};
