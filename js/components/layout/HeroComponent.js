import LoginComponent from "../LoginComponent";
export default {
  template: `
    <section id="hero">
      <div v-if="arrowShow" id="arrow" @click="showLogin()">
        <i id="arrow" class="fas fa-arrow-circle-right"></i>
      </div>
      <div id="home_hero">
        <h1 class="tagline" v-if="show">FLASHBACK</h1>
        <h1 class="tagline" v-if="show">50s, 60s, 70s, 80s, 90s</h1>
        <p>Movies, Shows, Music and much more...</p>
      <LoginComponent :loginShow=loginShow />
      </div>
    </section>
  `,
  data() {
    return {
      loginShow: false,
      authenticated: false,
      arrowShow: true,
      show: true
    };
  },

  mounted() {
    this.$root.$on("loginShow", data => {
      this.loginShow = data;
      this.show = false;
    });
  },

  methods: {
    showLogin() {
      this.loginShow = true;
      this.arrowShow = false;
      this.show = false;
    }
  },

  components: {
    LoginComponent
  }
};
