import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Industries from './components/Industries.vue';
import Stocks from './components/Stocks.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/industries', component: Industries },
    { path: '/stocks', component: Stocks },
    { path: '*', redirect: '/' }
  ]
});