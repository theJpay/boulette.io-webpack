<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import "./assets/css/style.scss";

body {
  margin: 0;
}

#app {
  min-height: 100vh;

  font-size: 14px;
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;

  background-color: var(--neutral-5);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
