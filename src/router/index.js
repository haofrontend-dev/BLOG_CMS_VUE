import { createRouter, createWebHistory } from 'vue-router';
import { VUE_BASE_PATH } from '@/constants';
import { publicRoutes } from './publicRoutes';
import { requiresAuth } from './guards';
import { privateRoutes } from './privateRoutes';

export const router = createRouter({
    history: createWebHistory(VUE_BASE_PATH),
    routes: [...publicRoutes, ...privateRoutes]
});

export async function setupRouter(app) {
    app.use(router);
    router.beforeEach(requiresAuth);
    await router.isReady();
}
