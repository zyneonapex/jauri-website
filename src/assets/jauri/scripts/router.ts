import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Error404 from "@/pages/errors/Error404.vue";
import Index from "@/pages/Index.vue";

declare module 'vue-router' {
    interface RouteMeta {
        title?: string
    }
}

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        meta: { title: 'Welcome' },
        component: Index
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error: 404',
        meta: { title: 'Not found' },
        component: Error404
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to) => {
    const defaultTitle = 'Jauri'
    document.title = to.meta.title ? `${to.meta.title} | ${defaultTitle}` : defaultTitle
})

export default router
