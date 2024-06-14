
import { AppRoute } from '@/constants';
import { getAccessToken } from '@/services/LocalStorage';

const routes = [
  {
    path: AppRoute.Login.path,
    name: AppRoute.Login.name,
    beforeEnter: (to, from, next) => {
      if (!getAccessToken()) {
        next();
      } else {
        next({ path: from.fullPath, replace: true });
      }
    },
    component: () => import('@/modules/authentication/LoginView.vue')
  }
];

export default routes;
