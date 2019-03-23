<template>
  <div>
    <button class="btn btn-primary" v-on:click="greet">Greet</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/store'
import axios from 'axios'

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1
  store
    .dispatch('event/fetchEvents', {
      page: currentPage
    })
    .then(() => {
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
 
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  computed: {
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage
    },
    ...mapState(['event'])
  },
  methods: {
      greet: function(){
        // WORKS
        axios.get('https://shijiezhou.herokuapp.com/post').then(res => {
          console.log(res.data);
        })
      }
  }
}
</script>
