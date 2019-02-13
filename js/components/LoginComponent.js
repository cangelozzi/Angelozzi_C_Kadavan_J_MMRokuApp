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
        // create some form.data(key);
        let formData = new FormData();
        formData.append("username", this.input.username);
        formData.append("password", this.input.password);

        // fetch from DB backend
        let url = `./admin/admin_login.php`;

        fetch(url, {
          method: "POST",
          body: formData
        })
          .then(res => res.json())
          .then(data => {
            if (!data) {
              console.log("Authentication Failed");
            } else {
              this.$root.$emit("authenticated", true);
              this.$router.replace({ name: "parents" });
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
