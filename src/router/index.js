import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditorView from '../views/EditorView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/editor',
        name: 'editor',
        component: EditorView
    }
]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(),
    routes
})

export default router
