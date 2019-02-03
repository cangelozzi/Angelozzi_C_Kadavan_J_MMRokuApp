import HomeComponent from './components/HomeComponent.js';
import LoginComponent from './components/LoginComponent.js';
import UsersComponent from './components/UsersComponent.js';


const routes = [
  // { path: '/', redirect: { name: "login" } },
  { path: '/', name: "home", component: HomeComponent },
  { path: '/login', name: "login", component: LoginComponent },
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
    mockAccount: {
      username: "camillo",
      password: 123
    }
  },

  created: function() {
    console.log("Parent Created");
  },

  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },

    logout() {
      this.authenticated = false;
    }
  },

  router: router
}).$mount("#app");

//! ---------- redirect if not authenticated --------------
// router.beforeEach((to, from, next) => {
//   console.log('check router guard : beforeEach');

//   if (!vm.authenticated) {
//     next('/login');
//   } else {
//     next();
//   }
// });

