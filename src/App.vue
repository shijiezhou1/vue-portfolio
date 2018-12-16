<template>
  <div id="app">
    <div id="nav">
      <router-link class="App_title" to="/about">About</router-link> | 
      <router-link class="App_title" to="/">Home</router-link> |
      <router-link class="App_title" to="/project">Project</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  margin-bottom: 10px;
}
.App_title{
  color: grey;
}
#nav{ 
  margin-bottom: 10px;
  position: relative;
}
</style>
