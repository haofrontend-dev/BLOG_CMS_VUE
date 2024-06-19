import { router } from '.';
import { LOGIN_URL } from '@/configs';
import { useAuthStore } from '@/stores/modules/auth';

const modules = import.meta.glob('@/modules/**/*.vue');

export const initDynamicRouter = async () => {
    const authStore = useAuthStore();

    try {
        await authStore.getAuthMenuList();

        // 2.判断当前用户有没有菜单权限
        if (!authStore.authMenuListGet.length) {
            router.replace(LOGIN_URL);
            return Promise.reject('No permission');
        }

        // 3.添加动态路由
        authStore.flatMenuListGet.forEach((item) => {
            item.children && delete item.children;
            if (item.component && typeof item.component == 'string') {
                item.component = modules['/src/modules' + item.component + '.vue'];
            }
            if (item.meta.isFull) {
                router.addRoute(item);
            } else {
                router.addRoute('layout', item);
            }
        });

    } catch (error) {
        router.replace(LOGIN_URL);
        return Promise.reject(error);
    }
};
