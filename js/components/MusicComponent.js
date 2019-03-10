export default {
  template: `
  <section id="contentmusic" v-if="musicSuggestions.length">

    <v-carousel height="400" dark :cycle="cycle">
      <v-carousel-item
      v-if="item"
        v-for="(item,i) in musicSuggestions"
        :key="i"
        :src="'images/music/' + item.music_img">
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
                    :src="'images/music/' + myList[0].music_img">

                  ></v-img>
                </v-flex>
                <v-flex xs7 v-if="myList.length">
                  <v-card-title primary-title v-if="myList.length">
                    <div>
                      <div v-if="myList.length" class="headline">{{myList[0].music_title}}</div>
                      <p v-else> loading.....</p>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[0].music_desc}}</div>
                      <div v-if="myList.length">{{myList[0].music_year}}</div>
                      <p v-else> loading.....</p>
                      <a class="trailer" v-if="myList.length" :href="myList[0].music_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div v-if="myList.length" class="text-xs-center" @click="favOn(myList[0].music_id, myList[0].music_fav, $event)">
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
                      <div v-if="myList.length" class="headline">{{myList[1].music_title}}</div>
                      <p v-else> loading.....</p>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[1].music_desc}}</div>
                      <div v-if="myList.length">{{myList[1].music_year}}</div>
                      <p v-else> loading.....</p>
                      <a class="trailer" v-if="myList.length" :href="myList[1].music_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                  v-if="myList.length"
                    :src="'images/music/' + myList[1].music_img">

                  </v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div v-if="myList.length" class="text-xs-center" @click="favOn(myList[1].music_id, yList[1].music_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn()" class="fas fa-heart"></i></p>
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
                    :src="'images/music/' + myList[2].music_img">

                  </v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title v-if="myList.length">
                    <div>
                      <div v-if="myList.length" class="headline">{{myList[2].music_title}}</div>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[2].music_desc}}</div>
                      <div v-if="myList.length">{{myList[2].music_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myList[2].music_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div v-if="myList.length" class="text-xs-center" @click="favOn(myList[2].music_id, myList[2].music_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn()" class="fas fa-heart"></i></p>
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
                      <div v-if="myList.length" class="headline">{{myList[3].music_title}}</div>
                      <div v-if="myList.length" style="font-size: 1.4rem;">{{myList[3].music_desc}}</div>
                      <div v-if="myList.length">{{myList[3].music_year}}</div>
                      <a class="trailer" v-if="myList.length" :href="myList[3].music_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                  v-if="myList.length"
                    :src="'images/music/' + myList[3].music_img">

                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div v-if="myList.length" class="text-xs-center" @click="favOn(myList[3].music_id, myList[3].music_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn()" class="fas fa-heart"></i></p>
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
                  <span>You have no inspiration. And want to save some musics for the night. Let’s hit the one and only, popular list.</span>
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
                    :src="'images/music/' + myPopular[0].music_img">

                  ></v-img>
                </v-flex>
                <v-flex xs7 v-if="myPopular.length">
                  <v-card-title primary-title v-if="myPopular.length">
                    <div>
                      <div v-if="myPopular.length" class="headline">{{myPopular[0].music_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[0].music_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[0].music_year}}</div>
                      <a class="trailer" v-if="myPopular.length" :href="myPopular[0].music_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div v-if="myPopular.length" class="text-xs-center" @click="favOn(myPopular[0].music_id, myPopular[0].music_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn()" class="fas fa-heart"></i></p>
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
                      <div v-if="myPopular.length" class="headline">{{myPopular[1].music_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[1].music_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[1].music_year}}</div>
                      <a class="trailer" v-if="myPopular.length" :href="myPopular[1].music_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                  v-if="myPopular.length"
                    :src="'images/music/' + myPopular[1].music_img">

                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div v-if="myPopular.length" class="text-xs-center" @click="favOn(myPopular[1].music_id, myPopular[1].music_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn()" class="fas fa-heart"></i></p>
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
                    :src="'images/music/' + myPopular[2].music_img">

                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title v-if="myPopular.length">
                    <div>
                      <div v-if="myPopular.length" class="headline">{{myPopular[2].music_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[2].music_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[2].music_year}}</div>
                      <a class="trailer" v-if="myPopular.length" :href="myPopular[2].music_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div v-if="myPopular.length" class="text-xs-center" @click="favOn(myPopular[2].music_id, myPopular[2].music_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn()" class="fas fa-heart"></i></p>
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
                      <div v-if="myPopular.length" class="headline">{{myPopular[3].music_title}}</div>
                      <div v-if="myPopular.length" style="font-size: 1.4rem;">{{myPopular[3].music_desc}}</div>
                      <div v-if="myPopular.length">{{myPopular[3].music_year}}</div>
                      <a class="trailer" v-if="myPopular.length" :href="myPopular[3].music_link" data-lity>PLAY TRAILER   <i class="fas fa-play-circle"></i></a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5 v-if="myPopular.length">
                  <v-img
                    v-if="myPopular.length"
                    :src="'images/music/' + myPopular[3].music_img">

                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                FAVOURITE
                <v-spacer></v-spacer>
                <div v-if="myPopular.length" class="text-xs-center" @click="favOn(myPopular[3].music_id, myPopular[3].music_fav, $event)">
                  <p :style="{'isFavourite': fav}"><i @click="favOn()" class="fas fa-heart"></i></p>
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
      musicAll: [],
      musicSuggestions: [],
      user: "",
      myList: [],
      myPopular: [],
      favMusic: [],
      fav: {
        color: 'white'
      }
    };
  },

  created: function () {
    this.fetchAllMusic();
  },

  methods: {
    fetchAllMusic() {
      let url = "./admin/get_music.php";

      fetch(url)
        .then(res => res.json())
        .then(data => {
          // sort musics by user access type
          if (localStorage.getItem("user_access") > 3) {
            this.musicAll = data;
          } else {
            this.musicAll = data.filter(
              // user with access type of 3 and below will have access only to G rated musics.
              music => music.music_certificate === "G"
            );
          }
          this.displayFourRandomMusic();
          this.myListMusic();
          this.popularList();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    displayFourRandomMusic() {
      for (let i = 1; i <= 4; i++) {
        let randomNumb = Math.floor(Math.random() * this.musicAll.length) + 1;
        this.musicSuggestions.push(this.musicAll[randomNumb]);
      }
    },

    myListMusic() {
      for (let i = 1; i <= 4; i++) {
        let randomNumb = Math.floor(Math.random() * this.musicAll.length) + 1;
        this.myList.push(this.musicAll[randomNumb]);
      }
    },

    popularList() {
      for (let i = 1; i <= 4; i++) {
        let randomNumb = Math.floor(Math.random() * this.musicAll.length) + 1;
        this.myPopular.push(this.musicAll[randomNumb]);
      }
    },
    favOn(id, fav) {
      console.log(id, fav)
      if (event.target.classList.contains('isFavourite')) {
        event.target.classList.remove('isFavourite');
      } else {
        event.target.classList.add('isFavourite');
      }
      if (fav === 1) {
        event.target.classList.add('isFavourite');
      }
      this.favMusic.push(id);
      this.updateFav();
    },
    updateFav() {
      var data = new FormData();
      data.append("json", JSON.stringify(this.favMusic));

      // fetch to DB backend
      let url = `./admin/update_music_fav.php`;
      fetch(url, {
          method: "POST",
          body: JSON.stringify(this.favMusic)
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