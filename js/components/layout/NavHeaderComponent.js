export default {
  props: ["navlist"],
  template: `
         <div id="mainHeader">
          <h2 class="hidden">Hamburger Navigation</h2>
          <!-- Hamburger Navigation -->
          <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" class="navigation__button">
              <span class="navigation__icon">&nbsp;</span>
            </label>
            <div class="navigation__background">&nbsp;</div>
            <nav class="navigation__nav">
              <h3 class="hidden">Main Navigation</h3>
              <ul class="navigation__list">

              <li @click.prevent="$router.push({ path: '/users' })" class="navigation__item"><a href="" class="navigation__link">Back</a></li>

                      <li @click.prevent='logout()' class="navigation__item"><a href="" class="navigation__link">Logout</a></li>
                <ul id="social">
                  <li>
                            <a href="http://www.twitter.com" target="_blank" id="tw"
                              ><i class="fab fa-twitter"></i
                            ></a>
                          </li>
                  <li>
                            <a href="http://www.instagram.com" target="_blank" id="pt"
                              ><i class="fab fa-instagram"></i
                            ></a>
                          </li>
                  <li>
                            <a href="http://www.facebook.com" target="_blank" id="fb"
                              ><i class="fab fa-facebook-square"></i
                            ></a>
                          </li>
                </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    `,

  data() {
    return {};
  },

  methods: {
    logout() {
      this.$root.$emit("authenticated", true);
      this.$router.replace({ name: "home" });
      localStorage.clear();
      console.log("localStorage.token is: ", localStorage.token);
    },
    openLogin() {
      this.$root.$emit("loginShow", true);
    }
  }
};
