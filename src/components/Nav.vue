<template>
    <div class='nav-style'>
        <router-link class="app-title" to='/event'>Events</router-link> |
        <router-link class="app-title" to="/about">{{ this.about }}</router-link> | 
        <router-link class="app-title" to="/">{{this.home}}</router-link> |
        <router-link class="app-title" :to="{ name: 'project'}" >{{this.project}}</router-link>
    </div>
</template>

<script>
import message from '../../json/message.json';

export default {
   data() {
    return {
      about: message.homePage_en.about,
      home: message.homePage_en.home,
      project: message.homePage_en.project
    }
   }
}
</script>

<style>
.app-title{
    color: grey;
}

.nav-style{ 
    margin-bottom: 10px;
    position: relative;
}
</style>