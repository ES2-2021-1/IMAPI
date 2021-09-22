import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import  router from './router';

Vue.use(BootstrapVue);
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return router[this.currentRoute]
    }
  },
}).$mount('#app')
