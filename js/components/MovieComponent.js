export default {
  template: `
  <section id="contentMovie" height="100" dark>

      <v-carousel height="400" :cycle="cycle">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>

    <v-carousel height="400" :cycle="cycle">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>

    <v-carousel height="400" :cycle="cycle">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>



  </section>`,

  // data() {
  //   return {
  // cycle: false,
  //     movieChoices: []
  //   };
  // },
  data() {
    return {
      cycle: false,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
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
    }
  },

  components: {}
};
