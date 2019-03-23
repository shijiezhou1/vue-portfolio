<template>
  <router-link
    class="event-link"
    :to="post.text.url"
    :id="post._id"
  >
    <b-container class="event-card -shadow">
      <b-row class="justify-content-md-center">
        <b-col lg="4" cols="8">
          <div class="event-title">{{ post.text.title }}</div>
          <div class="event-desc">{{ post.text.description }}</div>
          <span class="eyebrow">@{{post.createdAt}}</span>
        </b-col>
        <b-col lg="2" cols="4">
          <img
            class="event-image"
            :src="post.text.image"
            alt="no image"
          >
        </b-col>
      </b-row>
    </b-container>
  </router-link>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
.event-title{
    font-size: 100%;
    font-weight: bold;
}
.event-desc{
    line-height: 1;
    font-size: 80%;
}
.event-image {
  width: 100%;
}
</style>
