import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMask from 'v-mask';
import VueSession from 'vue-session'
import  router from './router';

Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.use(VueMask); 
Vue.use(VueSession)

window.axios = Vue.axios.create({ baseURL: 'http://localhost:8082/' });
window.router = VueRouter;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
