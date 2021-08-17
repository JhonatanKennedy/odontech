<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Unauthorized</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>
    <v-divider></v-divider>
    <router-view/>
  </div>
</template>

<style lang="scss">

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    overflow-y: hidden;
  }

  #nav {
    padding: 30px;
    font-size: 30px;
  }
  #nav a{
    padding: 10px;
    text-decoration: none;
    color: #2c3e50;
    font-size: 18px;
    border-radius: 10px;
  }
  .router-link-exact-active {
    background-color: #42b983;
  }

</style>
