<template>
  <div class="homepage">
    <b-container class="header">
      <h1>Welcome to the Gary Portal</h1>
    </b-container>
    <b-container class="header">
      <a
        href="https://apps.apple.com/us/app/gary-portal/id1346147876?itsct=apps_box&amp;itscg=30200"
        style="
          display: inline-block;
          overflow: hidden;
          border-radius: 13px;
          width: 250px;
          height: 83px;
        "
        ><img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1519862400&amp;h=45be4b8b432ce9ca343f0371cb1104d4"
          alt="Download on the App Store"
          style="border-radius: 13px; width: 250px; height: 83px"
      /></a>
    </b-container>
    <b-container>
      <a
        href="https://play.google.com/store/apps/details?id=com.almurray.android.almurrayportal&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        style="width: 275px; height: 115px; margin-top: -100px"
        ><img
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png"
          style="width: 275px; height: 115px; padding-top: -50px"
      /></a>
    </b-container>

    <h3 class="header">
      Gary Portal 3.0 allows you to access your Gary Portal account right from
      the comfort of your phone. You can follow your teammates and friends'
      posts on the Feed and message them directly from the chat page. You can
      manage your account and view your amigo points, positivity points and more
      profile information.
    </h3>

    <h3 class="header">
      Shortly, Gary Portal iOS will be updated to include staff powers, bug
      fixes and more :)
    </h3>

    <div class="btn">
      <b-button> T&Cs </b-button>
    </div>
    <div class="btn">
      <b-button> Privacy Policy </b-button>
    </div>
    <div class="btn">
      <b-button> Contact Us </b-button>
    </div>
    <div class="btn">
      <b-button v-on:click="pushfeedback"> Feedback </b-button>
    </div>
    <div style="margin-top: 20px">
      <div class="btn">
        <b-button variant="info" v-on:click="pushrules"> Rules and Regulations </b-button>
      </div>
      <div class="btn">
        <b-button variant="info" v-on:click="pushcomputerdating">
          'Computer Dating'
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    pushcomputerdating: function () {
      this.$router.push({ path: `/computerdating` });
    },
    pushrules: function () {
      this.$router.push({ path: `/rules` });
    },
    pushfeedback: function() {
      window.open('https://form.jotform.com/202855831651356', 'Gary Portal Feedback');
    }
  },
};
</script>

<style scoped>
.homepage {
  background-image: url("../assets/img/home-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
}

.header {
  padding-top: 3%;
  color: white;
}
.gpbutton {
  margin: 10px;
}

.wrapper {
  position: sticky;
  top: 0;
}

.gpbutton_2 {
  margin: 10px;
  filter: drop-shadow(3px 3px 3px #222);
  border-radius: 15px;
  height: 50px;
  width: 25vw;
}
</style>