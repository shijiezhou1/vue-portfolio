<template>
  <div>
    <!-- <div v-for="(value, key) in posts">
        {{ value }}
    </div> -->
    <div>LATEST</div>
    <hr>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/store'
import PostCard from "@/components/PostCard.vue"

function getNewPosts(routeTo, next) {
  store.dispatch('medium/fetchPosts').then(() => {
    next()
  })
}

export default {
  data: function() {
    return {
      posts: store.state.medium.posts
    } 
  },
  props: {
    // page: {
    //   type: Number,
    //   required: true
    // }
  },
  components: {
    PostCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getNewPosts(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getNewPosts(routeTo, next)
  },
  computed: {
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage
    },
    ...mapState(['medium'])
  },
  methods: {
  }
}
</script>
