import HomeComponent from "./components/HomeComponent.js";
import ParentsComponent from "./components/ParentsComponent.js";
import ProfilesComponent from "./components/layout/ProfilesComponent";

const routes = [
  // { path: '/', redirect: { name: "login" } },
  { path: "/", name: "home", component: HomeComponent },
  { path: "/parents", name: "parents", component: ParentsComponent },
  { path: "/profiles", name: "profiles", component: ProfilesComponent }
];

const router = new VueRouter({
  // mode: 'history',
  routes
});

const vm = new Vue({
  // el: '#app',

  data: {
    authenticated: false
  },

  created: function() {},

  mounted() {
    this.$root.$on("authenticated", data => {
      this.authenticated = data;
    });
  },

  methods: {
    setAuthenticated() {
      this.authenticated = true;
    },

    logout() {
      this.authenticated = false;
    },

    startGlider() {
      window.addEventListener("load", function() {
        document
          .querySelector(".glider")
          .Glider({ "setting-name": "setting-value" });
      });
    }
  },

  router: router
}).$mount("#app");

//! ---------- redirect if not authenticated --------------
router.beforeEach((to, from, next) => {
  console.log(vm.authenticated);

  if (!vm.authenticated) {
    next("/");
  } else {
    next();
  }
});
