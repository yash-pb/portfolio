import { createWebHistory, createRouter } from 'vue-router'

// import HomeView from './HomeView.vue'
// import App from "./App.vue";
import MainLayout from "./components/Layout/MainLayout.vue";
import Work from "./pages/Work.vue";
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";

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
        {
          path: '/projects',
          name: 'projects,',
          component: Projects
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