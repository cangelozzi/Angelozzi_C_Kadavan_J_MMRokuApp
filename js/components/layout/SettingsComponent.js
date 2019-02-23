export default {
  props: ['users'],
  template: `

  <section id="section">
    <h1 class="setTitle">User Admin Settings</h1>


    <div class="cards">
      <v-card

        v-for="user in users" :key="user.user_id"
        class="mx-auto"
        width="344">
        <v-img
          :aspect-ratio="16/9"
          :src="'images/icons/'+user.user_img"
        ></v-img>
        <v-card-title>
          <div>
            <span class="headline">{{ user.user_name }}</span>
          </div>

          <v-container fluid px-0>

            <v-checkbox
              color = "purple"
              v-model="user.user_admin"
              :label="'Administration Rights: '+Boolean(Number(user.user_admin))"

            ></v-checkbox>

            <v-form ref="form">
              <v-text-field
                v-model="user.user_access"
                label="User Access Level"
              ></v-text-field>
            </v-form>

            <v-switch
              color = "purple"
              v-model="user.user_active"
              :label="'User is Active: '+Boolean(Number(user.user_active))"
            ></v-switch>
          </v-container>

        </v-card-title>
      </v-card>
    </div>

    <v-btn @click="$router.go(-1)" id="bckbtn" color="purple">Back</v-btn>
    <v-btn @click="updateUser()" id="savebtn" color="green">Save</v-btn>

    <h2 v-if="upd" class="upd">Profile Updated. BACK button to user selection.</h2>

  </section>

  `,

  data() {
    return {
      items: [1, 2, 3, 4, 5],
      isAdminArray: [],
      upd: false
    };
  },

  mounted: function () {
    this.userAdminValue();
  },

  methods: {
    userAdminValue() {
      this.users.forEach(element => {
        element.user_admin = Boolean(Number(element.user_admin));
        if (element.user_admin === undefined) {
          element.user_admin = false;
        }
        // this.isAdminArray.push(element);
      });
      // console.log(this.isAdminArray)
    },

    updateUser() {
      this.upd = true;
      var data = new FormData();
      data.append("json", JSON.stringify(this.users));

      // fetch to DB backend
      let url = `./admin/update_user_access.php`;
      fetch(url, {
          method: "POST",
          body: JSON.stringify(this.users)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (!data || typeof data !== "object") {
            console.log("Profile update Failed");
          } else {
            console.log("Profile update OK");
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }

  }


};