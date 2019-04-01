<template>
    <b-row class="mt-2">
      <b-container>
        <a class="home_icon" href="https://github.com/shijiezhou1/" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
        <a class="home_icon" href="https://www.facebook.com/profile.php?id=100003975309210" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        <a class="home_icon" href="https://medium.com/@cs5129606" target="_blank"><font-awesome-icon :icon="['fab', 'medium']" /></a>
        <a class="home_icon" href="https://shijiezhou.tumblr.com/" target="_blank"><font-awesome-icon :icon="['fab', 'tumblr-square']" /></a>
        <a class="home_icon" href="https://shijiezhou.herokuapp.com/rss.xml" target="_blank"><font-awesome-icon :icon="['fas', 'rss']" /></a>
      </b-container>
    </b-row>
</template>

<style scoped>
.home_icon{
    font-size: 150%;
    margin: 0px 5px 0px 5px;
    color: grey;
}
.home_icon:hover {
    color: blue;
}
</style>