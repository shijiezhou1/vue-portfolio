<template>
  <div id="app">
    <div id="nav">
      <router-link class="App_title" to="/about">{{ this.about }}</router-link> | 
      <router-link class="App_title" to="/">{{this.home}}</router-link> |
      <router-link class="App_title" to="/project">{{this.project}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import message from '../json/message.json';

export default {
   data() {
    return {
      about: message.homePage_zh.about,
      home: message.homePage_zh.home,
      project: message.homePage_zh.project
    }
   }
}
</script>
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
