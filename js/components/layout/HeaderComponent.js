import NavHeaderComponent from "./NavHeaderComponent";
export default {
  template: `
    <header>
      <navheadercomponent :navlist="navlist"></navheadercomponent>
      <img id="logo" src="images/logo/logo_hor_black.png" alt="logo" />
      <img id="darkMode" src="images/icons/dark_mode.svg" alt="dark mode switch" />
    </header>
  `,

  data() {
    return {
      navlist: ["Movies", "Television", "Music", "Login", "Register"]
    };
  },

  methods: {},

  components: {
    navheadercomponent: NavHeaderComponent
  }
};