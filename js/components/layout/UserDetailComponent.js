import HeaderComponent from "./HeaderComponent";
import MovieComponent from "../MovieComponent";

export default {
  template: `
  <section id="userDetails" data-palette='0'>
      <HeaderComponent />

      <div id="welcome">
        <h1 id="firstTag" class="welcomeTag">Welcome back,  {{ $route.params.id }}.</h1>
        <img id="userIcon" :src="'images/icons/'+user.user_img" alt="user icon profile">
        <h1 class="welcomeTag">Movies inspiration for today?</h1>
      </div>

      <MovieComponent />

    </section>
  `,

  data() {
    return {
      user: []
    };
  },

  created: function() {
    this.fetchUser();
    localStorage.setItem("user_logged", this.$route.params.id);
    console.log(
      "LocalStorage User Logged is: " + localStorage.getItem("user_logged")
    );
  },

  methods: {
    fetchUser() {
      let params = {
        name: this.$route.params.id
      };

      let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");
      let url = "./admin/singleuser.php?" + query;

      fetch(url) // pass in the one or many query
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.user = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  components: {
    HeaderComponent,
    MovieComponent
  }
};
