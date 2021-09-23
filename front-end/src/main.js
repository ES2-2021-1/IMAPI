import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import  router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.use(VueRouter)

window.axios =  Vue.axios.create({baseURL: 'http://localhost:8082/'});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
