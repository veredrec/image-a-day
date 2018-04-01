import Vue from 'vue';
import VueFire from 'vuefire';
import App from './App';
import router from './router';
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

Vue.use(VueFire);

Vue.config.productionTip = false;

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
