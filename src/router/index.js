import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Main from '../pages/Main'
import Auth from '@/pages/Auth'
import AdminPanel from '@/pages/AdminPanel'
import Privacy from '@/pages/Privacy'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path:'/sign-in',
    name:'Auth',
    component:Auth,
    beforeEnter(to,from, next) {
      const auth = getAuth()
        onAuthStateChanged(auth, user => {
            if(user) {
              next('/admin-panel')
            }
            else {
              next()
            }
        })
    }
  },
  {
    path:'/admin-panel',
    name:'AdminPanel',
    component:AdminPanel,
    beforeEnter(to,from, next) {
      const auth = getAuth()
        onAuthStateChanged(auth, user => {
            if(user) {
              next()
            }
            else {
              next('/sign-in')
            }
        })
    }
  },
  {
    path:'/privacy',
    name:'Privacy',
    component:Privacy
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
