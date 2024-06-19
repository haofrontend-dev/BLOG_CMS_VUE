import { AppRoute, Permission } from '@/constants';

export const userManagementRoutes = [
    {
        path: AppRoute.Post.path,
        name: AppRoute.Post.name,
        component: () => import('@/modules/blog-manager/views/blogs/BlogsVIew.vue'),
        meta: {
            requiresAuth: true,
            authorities: [
                Permission.CREATE_USER,
                Permission.EDIT_USER,
                Permission.VIEW_USER_LISTING,
                Permission.VIEW_USER_DETAILS
            ]
        }
    },
    {
        path: AppRoute.PostDetails.path,
        name: AppRoute.PostDetails.name,
        component: () => import('@/modules/posts-manager/views/detail/[id].vaue'),
        meta: {
            requiresAuth: true,
            authorities: [
                Permission.CREATE_USER,
                Permission.EDIT_USER,
                Permission.VIEW_USER_LISTING,
                Permission.VIEW_USER_DETAILS
            ]
        }
    }
];
