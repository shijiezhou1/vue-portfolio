import Vue from 'vue';
import Vuex from 'vuex';
import * as event from '@/store/modules/event';
import * as medium from '@/store/modules/medium';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    event,
    medium
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
  }
});
