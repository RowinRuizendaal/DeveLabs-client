import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import blogSlug from '../views/_slug.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog/:id/:title',
    component: blogSlug,
    name: 'blog',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
