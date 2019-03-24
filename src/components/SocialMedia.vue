<template>
    <b-row class="mt-2">
      <b-container>
        <a class="home_icon" href="https://github.com/shijiezhou1/"><font-awesome-icon :icon="['fab', 'github']" /></a>
        <a class="home_icon" href="https://github.com/shijiezhou1/"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        <a class="home_icon" href="https://github.com/shijiezhou1/"><font-awesome-icon :icon="['fab', 'medium']" /></a>
        <a class="home_icon" href="https://github.com/shijiezhou1/"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
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