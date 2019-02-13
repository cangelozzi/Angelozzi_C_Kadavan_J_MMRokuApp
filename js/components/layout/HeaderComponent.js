import NavHeaderComponent from "./NavHeaderComponent";
export default {
  template: `
    <header>
      <navheadercomponent :navlist="navlist"></navheadercomponent>
      <img id="logo" src="images/logo/logo_hor_black.png" alt="logo" />
      <img @click="viewMode" id="darkMode" src="images/icons/dark_mode.svg" alt="dark mode switch" />
    </header>
  `,

  data() {
    return {
      navlist: ["Movies", "Television", "Music"]
    };
  },

  methods: {
    viewMode() {
      var palette = "0";
      if (document.body.getAttribute("data-palette") === "0") {
        palette = "1";
      }

      document.body.setAttribute("data-palette", palette);
    }
  },

  components: {
    navheadercomponent: NavHeaderComponent
  }
};
