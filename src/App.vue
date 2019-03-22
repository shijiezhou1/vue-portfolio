<template>
  <div id="app">
    <Nav />
    <NotificationContainer />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
   components: {
     Nav,
     NotificationContainer
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
  margin: 10px;
}
</style>
