<template>
  <div>
    <h1>POST LISTS:</h1>
    <button
      class="btn btn-primary"
      v-on:click="greet"
    >Greet</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/store'

function getNewPosts(routeTo, next) {
  console.log('in this posts page');
  store.dispatch('medium/fetchPosts').then(() => {
    next()
  })
}

export default {
  props: {
    // page: {
    //   type: Number,
    //   required: true
    // }
  },
  components: {

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
    ...mapState(['event'])
  },
  methods: {
    greet: function () {

    }
  }
}
</script>
