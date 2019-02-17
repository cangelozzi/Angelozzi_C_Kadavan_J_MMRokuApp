import HeaderComponent from "./layout/HeaderComponent";

export default {
  template: `
  <section id="parents">

  <HeaderComponent />

    <div @click='logout()'><i class="fas fa-sign-out-alt"></i></div>

    <div class="movieGrid">
      <div v-for="movieChoice in movieChoices" class="box">
        <li class="movie-choice">
          <img :src="'images/movie/'+movieChoice.movie_img" class="imgBox"/>
          <p class="movTitle">{{ movieChoice.movie_title }}</p>
          <p class="movYear">{{ movieChoice.movie_year }}</p>
        </li>
      </div>
    </div>

    </section>`,

  data() {
    return {
      movieChoices: []
    };
  },

  created: function() {
    this.fetchMovies();
  },

  methods: {
    fetchMovies() {
      let url = "./admin/allmovies.php";

      fetch(url) // pass in the one or many query
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.movieChoices = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    logout() {
      this.$root.$emit("authenticated", true);
      this.$router.replace({ name: "home" });
    }
  },

  components: {
    HeaderComponent
  }
};
