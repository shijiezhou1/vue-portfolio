import Vue from 'vue';
import Vuex from 'vuex';
import * as event from '@/store/modules/event';

Vue.use(Vuex);

export default new Vuex.Store({
  // use modules for store
  modules: {
    event
  },

  state: {
    count: 0,
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
    increment(state) {
      state.count++;
    }
  },
  actions: {},
  getters: {}
});
