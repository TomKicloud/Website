<template>
  <div class="bg">
    <h3>Al Murray thanks you!</h3>
    <p>Click below to return to the main page:</p>
    <div class="btn">
      <b-button variant="info" v-on:click="pushhome"> Go Home </b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pushhome: function () {
      this.$router.push({ path: `/` });
    },
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../assets/img/home-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  color: white;
  padding: 50px;
}
</style>