import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import BootstrapVue from 'bootstrap-vue';
import i18n from './i18n';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

//FONT ICON LISTS
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee, faRss, fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
//END ICONS

new Vue({
  created: function () {
    // `this` points to the vm instance
    // console.dir('vue object create')
  },
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
