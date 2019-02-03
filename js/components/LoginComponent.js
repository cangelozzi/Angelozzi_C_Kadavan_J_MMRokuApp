export default {
  template: `
    <div class="login">
      <div class="login-container">
        <p><input type="text" name="username" v-model="input.username" placeholder="username - ie. camillo"></p>
        <p><input type="password" name="password" v-model="input.password" placeholder="password - ie.password"></p>
        <button type="button" @click="login()">Login Here</button>
      </div>
    </div>
  `,

  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    login() {
      // check against Database user
      if (this.input.username != "" && this.input.password != "") {
        // fetch from DB backend
        let url = `./includes/index.php?username=${
          this.input.username
        }&&password=${this.input.password}`;

        fetch(url)
          .then(res => res.json())
          .then(data => {
            if (data[0] == "false") {
              console.log("Authentication Failed");
            } else {
              this.$emit("authenticated", true);
              this.$router.replace({ name: "users" });
            }
          })
          .catch(function(error) {
            console.error(error);
          });
      } else {
        console.log("Fields cannot be left blank!");
      }
    }
  }
};