(() => {

  console.log("Welcome to Roku Flashback App.");

  let navHeader_component = {
    props: ["navlist"],
    template: `
         <header id="mainHeader">
          <h2 class="hidden">Hamburger Navigation</h2>
          <!-- Hamburger Navigation -->
          <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" class="navigation__button">
              <span class="navigation__icon">&nbsp;</span>
            </label>
            <div class="navigation__background">&nbsp;</div>
            <nav class="navigation__nav">
              <h3 class="hidden">Main Navigation</h3>
              <ul class="navigation__list">
                <li class="navigation__item" v-for="item in navlist">
                        <a href="#" class="navigation__link">{{ item }}</a>
                      </li>
                <ul id="social">
                  <li><i class="fas fa-search" style="color: white;"></i></li>
                  <li>
                            <a href="http://www.twitter.com" target="_blank" id="tw"
                              ><i class="fab fa-twitter"></i
                            ></a>
                          </li>
                  <li>
                            <a href="http://www.instagram.com" target="_blank" id="pt"
                              ><i class="fab fa-instagram"></i
                            ></a>
                          </li>
                  <li>
                            <a href="http://www.facebook.com" target="_blank" id="fb"
                              ><i class="fab fa-facebook-square"></i
                            ></a>
                          </li>
                </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header>
    `
  };

  const vm = new Vue({
    el: "#app",
    data: {
      welcomeMsg: "Welcome to Roku Flashback ",
      navlist: ["Movies", "Television", "Music", "Profile", "Settings"],
      videodata: [],
      singlemoviedata: []
    },

    created: function() {
      this.fetchMovieData(null);
    },

    methods: {
      fetchMovieData(movie) {
        url = movie
          ? `./includes/index.php?movie=${movie}`
          : "./includes/index.php";

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
          .catch(function(error) {
            console.log(error);
          });
      }
    },

    components: {
      "nav-header": navHeader_component
    }
  });

})();