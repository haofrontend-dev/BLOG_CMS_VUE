import NProgress from '@/configs/nprogress';
import { AppRoute } from '@/constants';
import { getAccessToken } from '@/services/LocalStorage';
import { useAuthStore } from '@/stores/modules/auth';
import { LOGIN_URL, ROUTER_WHITE_LIST } from '@/configs';
import { initDynamicRouter } from './initDynamicRouter';

export async function requiresAuth(to, from, next) {
    const authStore = useAuthStore();

    // 1.NProgress
    NProgress.start();

    // 2.Dynamically set title
    const title = import.meta.env.VITE_APP_TITLE;
    document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;

    // 3.Check token router
    if (to.meta.requiresAuth) {
        // if (!getAccessToken()) {
        //     return { name: AppRoute.Login.name, query: { redirect: to.fullPath } };
        // }
    }

    if (ROUTER_WHITE_LIST.includes(to.path)) return next();

    if (!authStore.authMenuListGet.length) {
        await initDynamicRouter();
        return next({ ...to, replace: true });
    }

    authStore.setRouteName(to.name);

    next();
}

export const handleOnErrorRouter = (error) => {
    NProgress.done();
    console.warn('Routing Error', error.message);
};

export const handleAfterRouter = () => {
    NProgress.done();
};
