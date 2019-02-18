import auth from "../auth";
export default {
  props: ["loginShow"],
  template: `
    <div class="login">
    <div v-if="loginShow" class="login-container">
    <h1 id="isAuth" v-if="isAuth">Username or Password are not correct. Please try again.</h1>
        <p><input type="text" name="username" v-model="input.username" placeholder="for test use: theBoss" required ></p>
        <p><input type="password" name="password" v-model="input.password" placeholder="for test use: 123" required></p>
        <button type="button" @click="login()">Login Here</button>
      </div>
    </div>
  `,

  data() {
    return {
      input: {
        username: "",
        password: ""
      },
      isAuth: false
    };
  },

  methods: {
    login() {
      // check against Database user
      if (this.input.username !== "" && this.input.password !== "") {
        // create some form.data(key);
        let formData = new FormData();
        formData.append("username", this.input.username);
        formData.append("password", this.input.password);

        // fetch to DB backend
        let url = `./admin/admin_login.php`;

        fetch(url, {
          method: "POST",
          body: formData
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (!data || typeof data !== "object") {
              console.log("Authentication Failed");
              this.isAuth = true;
            } else {
              this.$root.$emit("authenticated", true);
              //! AUTH
              auth.login(this.input.username, this.input.password, loggedIn => {
                if (!loggedIn) {
                  this.error = true;
                } else {
                  console.log("localStorage.token is: ", localStorage.token);
                }
              });
              //! AUTH end
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
