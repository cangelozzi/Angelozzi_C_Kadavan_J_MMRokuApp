import HeaderComponent from "./layout/HeaderComponent";
import SelectionComponent from "./layout/SelectionComponent";
import ProfilesComponent from "./layout/ProfilesComponent";
import HeroComponent from "./layout/HeroComponent";
import FooterComponent from "./layout/FooterComponent";

export default {
  template: `
    <section>
      <HeaderComponent /> 
      <SelectionComponent />
      <ProfilesComponent />
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
    ProfilesComponent,
    HeroComponent,
    FooterComponent
  }
};
