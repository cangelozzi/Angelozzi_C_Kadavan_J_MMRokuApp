export default {
  props: ["loginShow"],
  template: `
    <div class="login">
      <div v-if="loginShow" class="login-container">
        <p><input type="text" name="username" v-model="input.username" placeholder="test parent: theBoss ..test kid: theKid " required ></p>
        <p><input type="password" name="password" v-model="input.password" placeholder="for Test use: 123" required></p>
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
      if (this.input.username !== "" && this.input.password !== "") {
        // fetch from DB backend
        let url = `./includes/index.php?username=${
          this.input.username
        }&&password=${this.input.password}`;

        fetch(url)
          .then(res => res.json())
          .then(data => {
            if (!data[0]) {
              console.log("Authentication Failed");
            } else {
              let username = data[0].username;
              let psw = data[0].password;

              if (this.input.username === username && this.input.password === psw) {
                this.$root.$emit("authenticated", true);
                this.$router.replace({ name: "users" });
              }
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