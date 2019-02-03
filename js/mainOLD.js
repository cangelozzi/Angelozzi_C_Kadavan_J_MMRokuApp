//! COMPONENTS
import HomeComponent from "./components/HomeComponent";

const routes = [
  // { path: '/', redirect: { name: "login" } },
  { path: "/", name: "home", component: HomeComponent }
  // { path: '/users', name: "users", component: UsersComponent }
];

const router = new VueRouter({
  // mode: 'history',
  routes
});

  const vm = new Vue({
    data: {
      // welcomeMsg: "Welcome to Roku Flashback ",
      // navlist: ["Movies", "Television", "Music", "Profile", "Settings"],
      // videodata: [],
      // singlemoviedata: []
    },

    // created: function() {
    //   // this.fetchMovieData(null);
    // },

    // methods: {
    //   // fetchMovieData(movie) {
    //   //   url = movie
    //   //     ? `./includes/index.php?movie=${movie}`
    //   //     : "./includes/index.php";

    //   //   fetch(url) // pass in the one or many query
    //   //     .then(res => res.json())
    //   //     .then(data => {
    //   //       if (movie) {
    //   //         // getting one movie, so use the single array
    //   //         console.log(data);
    //   //         this.singlemoviedata = data;
    //   //       } else {
    //   //         // push all the video (or portfolio content) into the video array
    //   //         console.log(data);
    //   //         this.videodata = data;
    //   //       }
    //   //     })
    //   //     .catch(function(error) {
    //   //       console.log(error);
    //   //     });
    //   // }
    // },


  }).$mount("#app");

