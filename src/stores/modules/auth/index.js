// * LIB
import { defineStore } from 'pinia';

// * IMPORT
import { AuthApi } from '@/api';
import { getShowMenuList, getAllBreadcrumbList, getFlatMenuList } from '@/utils';
import { SetupStoreId } from '@/constants';

export const useAuthStore = defineStore({
    id: SetupStoreId.Auth,
    state: () => ({
        authButtonList: {},
        authMenuList: [],
        routeName: ''
    }),
    getters: {
        authMenuListGet: (state) => state.authMenuList,
        showMenuListGet: (state) => getShowMenuList(state.authMenuList),
        breadcrumbListGet: (state) => getAllBreadcrumbList(state.authMenuList),
        flatMenuListGet: (state) => getFlatMenuList(state.authMenuList)
    },
    actions: {
        async getAuthMenuList() {
            const res = await AuthApi.getAuthMenuListApi();
            this.authMenuList = res.data;
        },
        async setRouteName(name) {
            this.routeName = name;
        }
    }
});
