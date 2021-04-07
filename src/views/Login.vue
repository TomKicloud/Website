<template>
  <div>
    <h1>Gary Portal</h1>

    <form class="createform" @submit.prevent="login">
      <div class="form-group">
        <label for="firstname">Email or username:</label>
        <input
          type="email"
          class="form-control"
          id="authenticator"
          placeholder="Email or username"
          v-model="details.authenticator"
          required
        />
      </div>
      <div class="form-group">
        <label for="firstname">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="details.password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <confirm-dialogue ref="loginerror"></confirm-dialogue>
  </div>
</template>

<script>
import ConfirmDialogue from "@/components/Confirm.vue";
export default {
  name: "Login",
  components: {
    ConfirmDialogue,
  },
  data: () => {
    return {
      details: {
        authenticator: "",
        password: "",
      },
    };
  },
  methods: {
    login: function () {
      this.http
        .post("auth/authenticate", {
          authenticatorString: this.details.authenticator,
          password: this.details.password,
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch(() => {
          this.$refs.loginerror.show({
            title: "Warning",
            message:
              "An error occurred, your email/username or password may be incorrect.",
            okButton: "Ok",
            hideSecondButton: true
          });
        });
    },
  },
};
</script>

<style scoped>
label {
  color: white;
  font-weight: bold;
}

input {
  font-size: 1.1vw;
  height: 2vw;
}

select {
  font-size: 1.1vw;
  height: 2vw;
}

.createform {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  height: 100%;
  background-color: #1a202cd0;
  --bg-opacity: 0.75;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  font-size: 1.5vw;
}
</style>
