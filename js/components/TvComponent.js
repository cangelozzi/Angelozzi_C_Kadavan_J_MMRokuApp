export default {
  template: `
  <section id="contenttv" v-if="tvSuggestions.length">

    <v-carousel height="400" dark :cycle="cycle">
      <v-carousel-item
      v-if="item"
        v-for="(item,i) in tvSuggestions"
        :key="i"
        :src="'images/tv/' + item.tv_img">
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
                    :src="'images/tv/' + myList[0].tv_img">

                  ></v-img>
                </v-flex>
                <v-flex xs7 v-if="myList.length">
                  <v-card-title primary-title v-if="myList.length">
                    <div>
                      <div v-if="myList.length" class="headline">{{myList[0].tv_title}}</div>
                      <p v-else> loading.....</p>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[0].tv_desc}}</div>
                      <div v-if="myList.length">{{myList[0].tv_year}}</div>
                      <p v-else> loading.....</p>
                      <a class="trailer" v-if="myList.length" :href="myList[0].tv_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this tv
                <v-spacer></v-spacer>
                <div class="text-xs-center">
                  <v-rating
                    v-model="rating1"
                    background-color="$dark-purple"
                    color="orange"
                    medium
                  ></v-rating>
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
                      <div v-if="myList.length" class="headline">{{myList[1].tv_title}}</div>
                      <p v-else> loading.....</p>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[1].tv_desc}}</div>
                      <div v-if="myList.length">{{myList[1].tv_year}}</div>
                      <p v-else> loading.....</p>
                      <a class="trailer" v-if="myList.length" :href="myList[1].tv_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                  v-if="myList.length"
                    :src="'images/tv/' + myList[1].tv_img">

                  </v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this tv
                <v-spacer></v-spacer>
                <v-rating
                    v-model="rating2"
                    background-color="$dark-purple"
                    color="orange"
                    medium
                  ></v-rating>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myList.length">
            <v-card color="cyan darken-2" class="white--text" v-if="myList.length">
              <v-layout v-if="myList.length">
                <v-flex xs5>
                  <v-img
                  v-if="myList.length"
                    :src="'images/tv/' + myList[2].tv_img">

                  </v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title v-if="myList.length">
                    <div>
                      <div v-if="myList.length" class="headline">{{myList[2].tv_title}}</div>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[2].tv_desc}}</div>
                      <div v-if="myList.length">{{myList[2].tv_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myList[2].tv_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this tv
                <v-spacer></v-spacer>
                <v-rating
                    v-model="rating3"
                    background-color="$dark-purple"
                    color="orange"
                    medium
                  ></v-rating>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myList.length">
            <v-card color="purple" class="white--text" v-if="myList.length">
              <v-layout row v-if="myList.length">
                <v-flex xs7 v-if="myList.length">
                  <v-card-title primary-title v-if="myList.length">
                    <div>
                      <div v-if="myList.length" class="headline">{{myList[3].tv_title}}</div>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[3].tv_desc}}</div>
                      <div v-if="myList.length">{{myList[3].tv_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myList[3].tv_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                  v-if="myList.length"
                    :src="'images/tv/' + myList[3].tv_img">

                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this tv
                <v-spacer></v-spacer>
                <v-rating
                    v-model="rating4"
                    background-color="$dark-purple"
                    color="orange"
                    medium
                  ></v-rating>
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
                  <span>You have no inspiration. And want to save some tvs for the night. Let’s hit the one and only, popular list.</span>
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
                    :src="'images/tv/' + myPopular[0].tv_img">

                  ></v-img>
                </v-flex>
                <v-flex xs7 v-if="myPopular.length">
                  <v-card-title primary-title v-if="myPopular.length">
                    <div>
                      <div v-if="myPopular.length" class="headline">{{myPopular[0].tv_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[0].tv_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[0].tv_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myPopular[0].tv_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3" v-if="myPopular.length">
                Rate this tv
                <v-spacer></v-spacer>
                <v-rating
                    v-model="rating5"
                    background-color="$dark-purple"
                    color="orange"
                    medium
                  ></v-rating>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myPopular.length">
            <v-card color="purple" class="white--text" v-if="myPopular.length">
              <v-layout row v-if="myPopular.length">
                <v-flex xs7 v-if="myPopular.length">
                  <v-card-title primary-title v-if="myPopular.length">
                    <div>
                      <div v-if="myPopular.length" class="headline">{{myPopular[1].tv_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[1].tv_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[1].tv_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myPopular[1].tv_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                  v-if="myPopular.length"
                    :src="'images/tv/' + myPopular[1].tv_img">

                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this tv
                <v-spacer></v-spacer>
                <v-rating
                    v-model="rating6"
                    background-color="$dark-purple"
                    color="orange"
                    medium
                  ></v-rating>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myPopular.length">
            <v-card color="cyan darken-2" class="white--text" v-if="myPopular.length">
              <v-layout>
                <v-flex xs5 v-if="myPopular.length">
                  <v-img
                  v-if="myPopular.length"
                    :src="'images/tv/' + myPopular[2].tv_img">

                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title v-if="myPopular.length">
                    <div>
                      <div v-if="myPopular.length" class="headline">{{myPopular[2].tv_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[2].tv_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[2].tv_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myPopular[2].tv_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this tv
                <v-spacer></v-spacer>
                <v-rating
                    v-model="rating7"
                    background-color="$dark-purple"
                    color="orange"
                    medium
                  ></v-rating>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 v-if="myPopular.length">
            <v-card color="purple" class="white--text" v-if="myPopular.length">
              <v-layout row v-if="myPopular.length">
                <v-flex xs7 v-if="myPopular.length">
                  <v-card-title primary-title v-if="myPopular.length">
                    <div v-if="myPopular.length">
                      <div v-if="myPopular.length" class="headline">{{myPopular[3].tv_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[3].tv_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[3].tv_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myPopular[3].tv_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5 v-if="myPopular.length">
                  <v-img
                    v-if="myPopular.length"
                    :src="'images/tv/' + myPopular[3].tv_img">

                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this tv
                <v-spacer></v-spacer>
                <v-rating
                    v-model="rating8"
                    background-color="$dark-purple"
                    color="orange"
                    medium
                  ></v-rating>
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
      tvAll: [],
      tvSuggestions: [],
      user: "",
      myList: [],
      myPopular: [],
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating4: 0,
      rating5: 0,
      rating6: 0,
      rating7: 0,
      rating8: 0
    };
  },

  created: function () {
    this.fetchAllTvShows();
  },

  methods: {
    fetchAllTvShows() {
      let url = "./admin/get_tvshows.php";

      fetch(url)
        .then(res => res.json())
        .then(data => {
          // sort tvs by user access type
          if (localStorage.getItem("user_access") > 3) {
            this.tvAll = data;
          } else {
            this.tvAll = data.filter(
              // user with access type of 3 and below will have access only to G rated tvs.
              tv => tv.tv_certificate === "G"
            );
          }
          this.displayFourRandomTvShows();
          this.myListTvShows();
          this.popularList();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    displayFourRandomTvShows() {
      for (let i = 1; i <= 4; i++) {
        let randomNumb = Math.floor(Math.random() * this.tvAll.length) + 1;
        this.tvSuggestions.push(this.tvAll[randomNumb]);
      }
    },

    myListTvShows() {
      for (let i = 1; i <= 4; i++) {
        let randomNumb = Math.floor(Math.random() * this.tvAll.length) + 1;
        this.myList.push(this.tvAll[randomNumb]);
      }
    },

    popularList() {
      for (let i = 1; i <= 4; i++) {
        let randomNumb = Math.floor(Math.random() * this.tvAll.length) + 1;
        this.myPopular.push(this.tvAll[randomNumb]);
      }
    }
  },

  components: {}
};