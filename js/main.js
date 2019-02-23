import HomeComponent from "./components/HomeComponent.js";
import UsersComponent from "./components/layout/UsersComponent";
import UserDetailComponent from "./components/layout/UserDetailComponent";
import SettingsComponent from "./components/layout/SettingsComponent";

const routes = [
  // { path: '/', redirect: { name: "login" } },
  {
    path: "/",
    name: "home",
    component: HomeComponent
  },
  {
    path: "/users",
    name: "users",
    component: UsersComponent,
    props: true
  },
  {
    path: "/users/:id",
    name: "usersdetails",
    props: true,
    component: UserDetailComponent
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsComponent,
    props: true
  },
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

  created: function () {},

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
      window.addEventListener("load", function () {
        document
          .querySelector(".glider")
          .Glider({
            "setting-name": "setting-value"
          });
      });
    }
  },

  router: router
}).$mount("#app");

//! ---------- redirect if not authenticated --------------
// router.beforeEach((to, from, next) => {
//   console.log(vm.authenticated);

//   if (!vm.authenticated) {
//     next("/");
//   } else {
//     next();
//   }
// });