import Vue from 'vue';
import Router from 'vue-router';
import Home from './../components/Home/Home';
import About from './../components/About/About';
import More from './../components/More/More';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/more',
      name: 'More',
      component: More
    }
  ]
});
