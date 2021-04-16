<template>
  <div class="cards">
    <div class="card">
      <p class="title">Are we epic gaming today?</p>
      <p class="title2">It is {{ friendlyDate }} today, and we <span ref="arearenot">are</span> epic gaming.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "AreWeEpicGaming",

  computed: {
    user: function () {
      return this.$store.getters.user;
    },
    bioText: function () {
      return this.user.userBio;
    },
    friendlyDate: function() {
        var options = { weekday: 'long', month: 'long', day: 'numeric' };

        return new Date().toLocaleDateString("en-US", options);
    },
  },
  mounted() {
    if (new Date().getDay() === 5) {
        this.$refs.arearenot.style.color = "green";
        this.$refs.arearenot.style.fontWeight = "bold"
        this.$refs.arearenot.style.fontSize = "17pt";
    }
  },
};
</script>

<style scoped>
.cards {
  max-width: 100vw;
  max-height: 100vh;
  height: 100%;
  padding: 5%;
}
.card {
  background-color: white;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  color: black;
  justify-content: center;
}

.profileimg {
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin: auto;
}

.title {
  font-family: "Montserrat-SemiBold", Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 26pt;
}

.title2 {
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  font-size: 14pt;
}

.title3 {
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  font-size: 12pt;
}

p {
  margin: 0px;
  padding: 0px;
}

textarea {
  text-align: center;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid grey;
  min-height: 30px;
  max-height: 100px;
}
</style>
