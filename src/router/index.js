import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue'
import { getAuth } from 'firebase/auth'
import PokemonPage from '../views/PokemonPage.vue'
import SinglePokemon from '../views/SinglePokemon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/profile',
      name: 'ProfilePage',
      component: Profile,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/pokemon',
      name: 'PokemonPage',
      component: PokemonPage,
    },

    {
      path: '/pokemon/:id',
      name: 'SinglePokemon',
      component: SinglePokemon,
    },
  ]
})
router.beforeEach((to,from, next) => {
if (to.matched.some((record) => record.meta.requiresAuth)) {
  if(getAuth().currentUser) {
    next();
  } else {
    alert('You are not logged in!')
    next('/')
  }
} else {
  next()
}

})

export default router
