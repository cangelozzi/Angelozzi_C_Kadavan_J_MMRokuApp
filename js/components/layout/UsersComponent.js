import HeaderComponent from "./HeaderComponent";
export default {
  template: `
  <section id="profiles" data-palette='0'>
      <HeaderComponent />

      <h1 class="profileTitle">Who is having fun today?</h1>

      <div id="profilesBox">
        <ul class="allusers" v-for="user in users">
          <router-link
            tag="li"
            :to="'/users/'+user.username"
            class="singleuser"
            style="cursor: pointer">
            <img :src="'images/icons/'+user.user_img" alt="users icon profile">
          </router-link>
          <p>{{ user.user_name }}</p>
        </ul>
      </div>
      <router-link
        :to="{name:'settings', params:{ users } }"
        style="cursor: pointer" >
        <p class="usersSettings">Settings</p>
        <i v-if="isAdmin" id="settings" class="fas fa-cog"></i>
      </router-link>
    </section>
  `,

  data() {
    return {
      users: [],
      user: "",
      isAdmin: false
    };
  },

  created: function () {
    this.$root.$emit("showbtn", true);
    this.fetchUsers();
    this.isUserAdmin();
  },

  methods: {
    fetchUsers() {
      let url = "./admin/allusers.php";

      fetch(url) // pass in the one or many query
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.users = data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    isUserAdmin() {
      if (Number(localStorage.getItem("admin"))) {
        this.isAdmin = true;
      }
    }

  },

  components: {
    HeaderComponent
  }
};