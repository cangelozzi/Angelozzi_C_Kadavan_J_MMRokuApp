export default {
  template: `
  <section id="contentMovie" v-if="movieSuggestions.length">

    <v-carousel height="400" dark :cycle="cycle">
      <v-carousel-item
      v-if="item"
        v-for="(item,i) in movieSuggestions"
        :key="i"
        :src="'images/movie/' + item.movie_img">
      </v-carousel-item>
    </v-carousel>

      <div
      v-if="myList.length"
    id="e3"
    style="max-width: 400px; margin: auto;"
    class="grey lighten-3"
  >
    <v-toolbar color="pink" dark >
      <v-toolbar-title>My List</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Unlimited Blockbusters</div>
                  <span>Everything you save will be saved to “My List”.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Watch now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myList.length">
            <v-card color="cyan darken-2" class="white--text" v-if="myList.length">
              <v-layout v-if="myList.length">
                <v-flex xs5 v-if="myList.length">
                  <v-img
                    v-if="myList.length"
                    :src="'images/movie/' + myList[0].movie_img">

                  ></v-img>
                </v-flex>
                <v-flex xs7 v-if="myList.length">
                  <v-card-title primary-title v-if="myList.length">
                    <div>
                      <div v-if="myList.length" class="headline">{{myList[0].movie_title}}</div>
                      <p v-else> loading.....</p>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[0].movie_desc}}</div>
                      <div v-if="myList.length">{{myList[0].movie_year}}</div>
                      <p v-else> loading.....</p>
                      <a class="trailer" v-if="myList.length" :href="myList[0].movie_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div class="text-xs-center" @click="favOn(myList[0].movie_id, myList[0].movie_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn($event)" class="fas fa-heart"></i></p>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myList.length">
            <v-card color="purple" class="white--text" v-if="myList.length">
              <v-layout row v-if="myList.length">
                <v-flex xs7 v-if="myList.length">
                  <v-card-title primary-title v-if="myList.length">
                    <div>
                      <div v-if="myList.length" class="headline">{{myList[1].movie_title}}</div>
                      <p v-else> loading.....</p>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[1].movie_desc}}</div>
                      <div v-if="myList.length">{{myList[1].movie_year}}</div>
                      <p v-else> loading.....</p>
                      <a class="trailer" v-if="myList.length" :href="myList[1].movie_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                  v-if="myList.length"
                    :src="'images/movie/' + myList[1].movie_img">

                  </v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div class="text-xs-center" @click="favOn(myList[1].movie_id, myList[1].movie_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn($event)" class="fas fa-heart"></i></p>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myList.length">
            <v-card color="cyan darken-2" class="white--text" v-if="myList.length">
              <v-layout v-if="myList.length">
                <v-flex xs5>
                  <v-img
                  v-if="myList.length"
                    :src="'images/movie/' + myList[2].movie_img">

                  </v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title v-if="myList.length">
                    <div>
                      <div v-if="myList.length" class="headline">{{myList[2].movie_title}}</div>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[2].movie_desc}}</div>
                      <div v-if="myList.length">{{myList[2].movie_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myList[2].movie_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div class="text-xs-center" @click="favOn(myList[2].movie_id, myList[2].movie_fav, $event)">
                  <p :style="fav"><i @click="favOn($event)" class="fas fa-heart"></i></p>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myList.length">
            <v-card color="purple" class="white--text" v-if="myList.length">
              <v-layout row v-if="myList.length">
                <v-flex xs7 v-if="myList.length">
                  <v-card-title primary-title v-if="myList.length">
                    <div>
                      <div v-if="myList.length" class="headline">{{myList[3].movie_title}}</div>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[3].movie_desc}}</div>
                      <div v-if="myList.length">{{myList[3].movie_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myList[3].movie_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                  v-if="myList.length"
                    :src="'images/movie/' + myList[3].movie_img">

                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div class="text-xs-center" @click="favOn(myList[3].movie_id, myList[3].movie_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn($event)" class="fas fa-heart"></i></p>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>

  <div
  v-if="myPopular.length"
    id="e3"
    style="max-width: 400px; margin: auto;"
    class="grey lighten-3"
  >
    <v-toolbar color="pink" dark >
      <v-toolbar-title>Popular</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Best Selection</div>
                  <span>You have no inspiration. And want to save some movies for the night. Let’s hit the one and only, popular list.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Watch now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myPopular.length">
            <v-card color="cyan darken-2" class="white--text" v-if="myPopular.length">
              <v-layout v-if="myPopular.length">
                <v-flex xs5 v-if="myPopular.length">
                  <v-img
                  v-if="myPopular.length"
                    :src="'images/movie/' + myPopular[0].movie_img">

                  ></v-img>
                </v-flex>
                <v-flex xs7 v-if="myPopular.length">
                  <v-card-title primary-title v-if="myPopular.length">
                    <div>
                      <div v-if="myPopular.length" class="headline">{{myPopular[0].movie_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[0].movie_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[0].movie_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myPopular[0].movie_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div class="text-xs-center" @click="favOn(myPopular[0].movie_id, myPopular[0].movie_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn($event)" class="fas fa-heart"></i></p>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myPopular.length">
            <v-card color="purple" class="white--text" v-if="myPopular.length">
              <v-layout row v-if="myPopular.length">
                <v-flex xs7 v-if="myPopular.length">
                  <v-card-title primary-title v-if="myPopular.length">
                    <div>
                      <div v-if="myPopular.length" class="headline">{{myPopular[1].movie_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[1].movie_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[1].movie_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myPopular[1].movie_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                  v-if="myPopular.length"
                    :src="'images/movie/' + myPopular[1].movie_img">

                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div class="text-xs-center" @click="favOn(myPopular[1].movie_id, myPopular[1].movie_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn($event)" class="fas fa-heart"></i></p>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myPopular.length">
            <v-card color="cyan darken-2" class="white--text" v-if="myPopular.length">
              <v-layout>
                <v-flex xs5 v-if="myPopular.length">
                  <v-img
                  v-if="myPopular.length"
                    :src="'images/movie/' + myPopular[2].movie_img">

                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title v-if="myPopular.length">
                    <div>
                      <div v-if="myPopular.length" class="headline">{{myPopular[2].movie_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[2].movie_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[2].movie_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myPopular[2].movie_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div class="text-xs-center" @click="favOn(myPopular[2].movie_id, myPopular[2].movie_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn($event)" class="fas fa-heart"></i></p>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myPopular.length">
            <v-card color="purple" class="white--text" v-if="myPopular.length">
              <v-layout row v-if="myPopular.length">
                <v-flex xs7 v-if="myPopular.length">
                  <v-card-title primary-title v-if="myPopular.length">
                    <div v-if="myPopular.length">
                      <div v-if="myPopular.length" class="headline">{{myPopular[3].movie_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[3].movie_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[3].movie_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myPopular[3].movie_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5 v-if="myPopular.length">
                  <v-img
                    v-if="myPopular.length"
                    :src="'images/movie/' + myPopular[3].movie_img">

                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div class="text-xs-center" @click="favOn(myPopular[3].movie_id, myPopular[3].movie_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn($event)" class="fas fa-heart"></i></p>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>

  <img id="contentFooter" src="images/logo/logo_hor_black.png" alt="footer logo">

  </section>`,

  data() {
    return {
      cycle: false,
      moviesAll: [],
      movieSuggestions: [],
      user: "",
      myList: [],
      myPopular: [],
      fav: {
        color: 'white'
      },
      favMovies: []
    };
  },

  created: function () {
    this.fetchAllMovies();
  },

  methods: {
    fetchAllMovies() {
      let url = "./admin/getmovies.php";

      fetch(url)
        .then(res => res.json())
        .then(data => {
          // sort movies by user access type
          if (localStorage.getItem("user_access") > 3) {
            this.moviesAll = data;
          } else {
            this.moviesAll = data.filter(
              // user with access type of 3 and below will have access only to G rated movies.
              movie => movie.movie_certificate === "G"
            );
          }
          this.displayFourRandomMovies();
          this.myListMovie();
          this.popularList();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    displayFourRandomMovies() {
      for (let i = 1; i <= 4; i++) {
        let randomNumb = Math.floor(Math.random() * this.moviesAll.length) + 1;
        this.movieSuggestions.push(this.moviesAll[randomNumb]);
      }
    },

    myListMovie() {
      for (let i = 1; i <= 4; i++) {
        let randomNumb = Math.floor(Math.random() * this.moviesAll.length) + 1;
        this.myList.push(this.moviesAll[randomNumb]);
      }
    },

    popularList() {
      for (let i = 1; i <= 4; i++) {
        let randomNumb = Math.floor(Math.random() * this.moviesAll.length) + 1;
        this.myPopular.push(this.moviesAll[randomNumb]);
      }
    },
    favOn(id, fav) {
      console.log(fav)
      if (event.target.classList.contains('isFavourite')) {
        event.target.classList.remove('isFavourite');
      } else {
        event.target.classList.add('isFavourite');
      }
      if (fav === 1) {
        event.target.classList.add('isFavourite');
      }
      this.favMovies.push(id);
      this.updateFav();
    },
    updateFav() {
      var data = new FormData();
      data.append("json", JSON.stringify(this.favMovies));

      // fetch to DB backend
      let url = `./admin/update_movie_fav.php`;
      fetch(url, {
          method: "POST",
          body: JSON.stringify(this.favMovies)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (!data || typeof data !== "object") {
            console.log("Favourite update Failed");
          } else {
            console.log("Favourite update OK");
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },

  components: {}
};