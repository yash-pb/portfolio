import { createWebHistory, createRouter } from 'vue-router'

// import HomeView from './HomeView.vue'
// import App from "./App.vue";
import MainLayout from "./components/Layout/MainLayout.vue";
import Work from "./pages/Work.vue";
import Home from "./pages/Home.vue";

const routes = [
    {
      path: '/',
      component: MainLayout,
      name: 'index',
      children: [
        {
          path: '/',
          name: 'home,',
          component: Home
        },
        {
          path: '/work',
          name: 'work,',
          component: Work
        },
      ]
    },
    {
      
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;