import { createWebHistory, createRouter } from 'vue-router'

// import HomeView from './HomeView.vue'
// import App from "./App.vue";
import MainLayout from "./components/Layout/MainLayout.vue";

const routes = [
    {
      path: '/',
      component: MainLayout
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;