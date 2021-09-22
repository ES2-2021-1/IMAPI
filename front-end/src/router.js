import VueRouter from 'vue-router';

import Home from './pages/home/Home.vue';
import Index from './pages/index/Index.vue';
import NewStartup from './pages/newStartup/NewStartup.vue';
import Register from './pages/register/Register.vue';
import StartupDetails from './pages/startupDetails/StartupDetails.vue';
import Login from './pages/login/Login.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/entrar',
            name: 'login',
            component: Login
        },
        {
            path: '/startup',
            name: 'new-startup',
            component: NewStartup
        },
        {
            path: '/startup/:id',
            name: 'startup-details',
            component: StartupDetails
        },

        {
            path: '/cadastro',
            name: 'register',
            component: Register
        },
    ]
});
