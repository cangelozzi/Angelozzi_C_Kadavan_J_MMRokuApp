import LoginComponent from "./../LoginComponent";

export default {
  template: `
    <section id="hero">
      <div v-if="arrowShow" id="arrow" @click="showLogin()">
        <i id="arrow" class="fas fa-arrow-circle-right"></i>
      </div>
      <div id="home_hero">
        <h1 id="tagline">Flashback to 50s, 60s, 70s, 80s, 90s</h1>
        <p>Movies, Shows, Music and much more...</p>
      <LoginComponent :loginShow=loginShow />
      </div>
    </section>
  `,
  data() {
    return {
      loginShow: false,
      authenticated: false,
      arrowShow: true
    };
  },

  methods: {
    showLogin() {
      this.loginShow = true;
      this.arrowShow = false;
    }
  },

  components: {
    LoginComponent
  }
};
