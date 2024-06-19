import { AppRoute } from '@/constants';

export const privateRoutes = [
    {
        path: '/',
        redirect: AppRoute.Home.path
    },
    {
        path: '/layout',
        name: 'layout',
        component: () => import('@/layouts/index.vue'),
        // component: () => import("@/layouts/indexAsync.vue"),
        redirect: AppRoute.Home.path,
        children: []
    }
];
