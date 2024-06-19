import { SetupStoreId } from '@/constants';
import piniaPersistConfig from '@/stores/helpers/persist';
import { defineStore } from 'pinia';
export const useGlobalStore = defineStore({
    id: SetupStoreId.Global,
    state: () => ({
        layout: 'main',
        assemblySize: 'default',
        language: null,
        maximize: false,
        isDark: false,
        isGrey: false,
        isWeak: false,
        asideInverted: false,
        headerInverted: false,
        isCollapse: false,
        accordion: true,
        breadcrumb: true,
        breadcrumbIcon: true,
        tabs: true,
        tabsIcon: true,
        footer: true
    }),
    getters: {},
    actions: {
        // Set GlobalState
        setGlobalState(...args) {
          this.$patch({ [args[0]]: args[1] });
        }
      },
      persist: piniaPersistConfig("global")
});
