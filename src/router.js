import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import List from './components/List.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/List', component: List },
    { path: '*', redirect: '/' }
  ]
});