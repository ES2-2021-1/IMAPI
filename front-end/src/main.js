import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMask from 'v-mask';
import  router from './router';

Vue.use(VueAxios, axios);

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.use(VueRouter)

window.axios =  Vue.axios.create({baseURL: 'http://localhost:8082/'});

Vue.use(VueMask);

window.axios = Vue.axios;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
