import HomeComponent from './components/HomeComponent.js';
import LoginComponent from './components/LoginComponent.js';
import UsersComponent from './components/UsersComponent.js';


const routes = [
  // { path: '/', redirect: { name: "login" } },
  { path: '/', name: "home", component: HomeComponent },
  { path: '/users', name: "users", component: UsersComponent }
];

const router = new VueRouter({
  // mode: 'history',
  routes
});

const vm = new Vue({
  // el: '#app',

  data: {
    authenticated: false,
  },

  mounted() {
    this.$root.$on('authenticated', data => {
        this.authenticated = data;
    });
  },

  methods: {
    setAuthenticated() {
      this.authenticated = true;
      
    },

    logout() {
      this.authenticated = false;
    }
  },

  router: router
}).$mount("#app");

//! ---------- redirect if not authenticated --------------
router.beforeEach((to, from, next) => {
  console.log(vm.authenticated);

  if (!vm.authenticated) {
    next('/');
  } else {
    next();
  }
});

