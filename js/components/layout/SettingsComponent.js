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
    <v-btn id="savebtn" color="green">Save</v-btn>

  </section>

  `,

  data() {
    return {
      checkbox: true,
      items: [1, 2, 3, 4, 5],
      switch1: true
    }
  }


};