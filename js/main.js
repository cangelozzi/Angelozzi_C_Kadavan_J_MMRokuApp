(() => {

  console.log("Welcome to Roku Flashback App.");

  const vm = new Vue({
    el: '#app',
    data: {
      welcomeMsg: "Welcome to Roku Flashback App.",
      navList: ['Movie_FBK', 'TV_FBK', 'Music_FBK', 'Profile', 'Settings'],
    },

    created: function() {
      this.fetchMovieData(null);
    },

    methods: {

      fetchMovieData(movie) {
        url = movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';

        fetch(url) // pass in the one or many query
          .then(res => res.json())
          .then(data => {
            if (movie) {
              // getting one movie, so use the single array
              console.log(data);
              this.singlemoviedata = data;
            } else {
              // push all the video (or portfolio content) into the video array
              console.log(data);
              this.videodata = data;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    }
  });

})();