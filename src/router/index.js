import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoL from '../views/LoL.vue'
import Travel from '../views/Travel.vue'
import Art from '../views/Art.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/LeagueOfStats',
        name: 'LeagueOfStats',
        component: LoL
    },
    {
        path: '/TravelDiary',
        name: 'TravelDiary',
        component: Travel
    },
    {
        path: '/ArtShare',
        name: 'ArtShare',
        component: Art
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (!to.hash) {
        window.scrollTo(0, 0);
    }

    next();
});

export default router
