import Vue from 'vue'
import Vuex from 'vuex'

// import modules that we need for front end 
import * as event from '@/modules/event.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // use modules for store
  modules: {
    event
  },

  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  mutations: {

  },
  actions: {

  }
})
