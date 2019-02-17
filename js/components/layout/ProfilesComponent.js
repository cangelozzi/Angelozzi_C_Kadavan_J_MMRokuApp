import HeaderComponent from "./HeaderComponent";
export default {
  template: `
  <section id="profiles" data-palette='0'>
      <HeaderComponent />

      <div id="profilesBox">
      <div class="allusers" v-for="user in users">
        <div class="singleuser">
        <img :src="'images/icons/'+user.user_img" alt="users icon profile">
        <p>{{ user.user_name }}</p>
          </div>
        </div>
      </div>
    </section>
  `,

  data() {
    return {
      users: []
    };
  },

  created: function() {
    this.$root.$emit("showbtn", true);
    this.fetchUsers();
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
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  components: {
    HeaderComponent
  }
};
