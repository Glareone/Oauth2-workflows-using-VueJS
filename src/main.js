import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import { routes } from './routes';

Vue.config.productionTip = false;

// all routes in routes.js
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
