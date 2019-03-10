import HeaderComponent from "./HeaderComponent";
import MovieComponent from "../MovieComponent";
import TvComponent from "../TvComponent";
import MusicComponent from "../MusicComponent";

export default {
  template: `
  <section id="userDetails" data-palette='0'>
      <HeaderComponent />

      <div class="contentBtn">
        <v-btn :class="{'isSelected': moviehide}" @click="movieOn()" color="purple">Movies</v-btn>
        <v-btn :class="{'isSelected': tvhide}" @click="tvOn()" color="purple">TV Shows</v-btn>
        <v-btn :class="{'isSelected': musichide}" @click="musicOn()" color="purple">Music</v-btn>
      </div>

      <div id="welcome">
        <h1 id="firstTag" class="welcomeTag">Welcome back,  {{ $route.params.id }}.</h1>
        <img id="userIcon" :src="'images/icons/'+user.user_img" alt="user icon profile">
        <h1 class="welcomeTag">Inspiration for today?</h1>
      </div>

      <i id="downArrow" class="fas fa-chevron-down"></i>
      <keep-alive>
      <MovieComponent v-if="moviehide" />
      <TvComponent  v-if="tvhide" />
      <MusicComponent  v-if="musichide"/>
      </keep-alive>
    </section>
  `,

  data() {
    return {
      user: [],
      moviehide: false,
      tvhide: false,
      musichide: false
    };
  },

  created: function () {
    this.moviehide = true;
    this.fetchUser();
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
          localStorage.setItem("user_logged", this.user.username);
          localStorage.setItem("user_access", this.user.user_access);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    movieOn() {
      this.moviehide = true;
      this.tvhide = false;
      this.musichide = false;
    },
    tvOn() {
      this.moviehide = false;
      this.tvhide = true;
      this.musichide = false;
    },
    musicOn() {
      this.moviehide = false;
      this.tvhide = false;
      this.musichide = true;
    }
  },

  components: {
    HeaderComponent,
    MovieComponent,
    TvComponent,
    MusicComponent
  }
};