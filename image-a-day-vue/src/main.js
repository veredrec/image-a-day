import Vue from 'vue';
import App from './App';
import router from './router';
import Header from './components/Header.vue';

Vue.config.productionTip = false;

Vue.component('app-header', Header);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data() {
    return {
      items: ['1', '2', '3']
    };
  }
});
