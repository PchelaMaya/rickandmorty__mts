import { createRouter, createWebHistory } from 'vue-router';

import Index from '@/components/Index/Index.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        // {
        //     path: "/products/:id",
        //     name: "Product",
        //     component: Product,
        // },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ],
})
export default router;