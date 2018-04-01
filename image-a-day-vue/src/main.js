import Vue from 'vue';
import VueFire from 'vuefire';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import App from './App';
import router from './router';
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

Vue.use(VueFire);

Vue.config.productionTip = false;

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('icon', Icon);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
