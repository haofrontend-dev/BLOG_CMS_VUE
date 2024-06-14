import { AppRoute } from '@/constants';
import { getAccessToken } from '@/services/LocalStorage';

export function requiresAuth(to) {
    if (to.meta.requiresAuth) {
        // see more https://router.vuejs.org/guide/advanced/meta.html
        // see more https://router.vuejs.org/guide/advanced/navigation-guards.html
        if (!getAccessToken()) {
            return { name: AppRoute.Login.name, query: { redirect: to.fullPath } };
        }
    }
}
