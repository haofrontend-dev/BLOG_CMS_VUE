import { AppRoute } from '@/constants';
import MainLayout from '@/layouts/main-layout/index.vue';

export const privateRoutes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: AppRoute.Post.path,
                name: AppRoute.Post.name,
                component: () => import('@/modules/posts-manager/views/posts/PostVIew.vue'),
                alias: ['/', '/posts'],
                meta: { requiresAuth: true }
            }
        ]
    }
];
