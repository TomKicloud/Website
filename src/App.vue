<template>
  <div id="gp">
    <router-view />
  </div>
</template>

<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css";
@import "//fonts.googleapis.com/css?family=Nunito";

html {
  max-height: 100vh;
}
body {
  margin: 0px !important;
  max-height: 100%;
  background: none;
}

#app {
  margin: 0px !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#gp {
  margin: 0px !important;
  background-image: url("~@/assets/BackgroundGradient.jpg");
  background-size: cover;
  overflow-y: hidden;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  height: 2vw;
  width: 100%;
  display: inline-block;
  line-height: 1.5 imp !important;
  color: white;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: #212529;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.375rem, 0.75rem;
  margin: 5px 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  font-size: 1vw;
}

button:hover {
  box-shadow: 0 16px 15px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar {
  width: 14px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  height: 6px;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.15);
  box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
    inset 1px 1px 0px rgba(0, 0, 0, 0.05);
}
::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}
::-webkit-scrollbar-corner {
  background-color: transparent;
}
</style>
