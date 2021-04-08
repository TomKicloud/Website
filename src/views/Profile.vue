<template>
    <div>
        <div class="card">
            <img class="profileimg" :src="user.userProfileImageUrl">
            <p class="title">{{ user.userFullName }}</p>
            <p class="title2">{{ user.userSpanishName }}</p>
            <p class="title3">@{{ user.userName }}</p>

            <textarea v-model="bioText"></textarea>
        </div>

    </div>
</template>

<script>
export default {
    name: "Profile",
    computed: {
        user: function() {
            return this.$store.getters.user;
        },
        bioText: function() {
            return this.user.userBio;
        }
    },
    mounted() {
        console.log("here");
    }
}
</script>

<style scoped>
.card {
    background-color: white;
    border-radius: 20x;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2%;
    color: black;

}

.profileimg {
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin: auto;
}

.title {
  font-family: 'Montserrat-SemiBold', Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 18pt;
}

.title2 {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  font-size: 14pt;
}

.title3 {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
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