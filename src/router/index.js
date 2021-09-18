import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import Users from '../views/Users.vue'
import Post from '../views/Post.vue'
import User from '../views/User.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Posts,
  },
  {
    path: '/post/:id',
    name: 'Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Post,
  },
  {
    path: '/users',
    name: 'Users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Users,
  },
  {
    path: '/user/:id',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: User,
  },
  //redireccion al home en caso de que no exista (x) ruta.
  {
    path:'*',
    redirect:'/',
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
