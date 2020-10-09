import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'vue2-animate/dist/vue2-animate.min.css'
import App from './App.vue';
import store from "./store/store.js";
import {routes} from './routes.js';
import VueRouter from 'vue-router';


Vue.config.productionTip = false

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
