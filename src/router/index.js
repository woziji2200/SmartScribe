import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { defineAsyncComponent } from 'vue';
import loading from './loading.vue'
// import EditorView from '../views/EditorView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/editor',
        name: 'editor',
        component: defineAsyncComponent({
            loader: () => import('../views/EditorView.vue'),
            loadingComponent: loading,
            delay: 100,
        })
    }
]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(),
    routes
})

export default router
