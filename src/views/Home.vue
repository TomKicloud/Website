<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  title: "GP2",
  components: {
    HelloWorld,
  },
  mounted() {
    this.http.post("auth/authenticate", {
      authenticatorString: "tomknighton@icloud.com",
      password: "Thomas7494!"
    }).then(resp => console.log(resp));
  }
};
</script>
