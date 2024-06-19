<template>
    <div
        class="w-[300px] h-screen overflow-y-auto md:flex flex-col items-start border-r border-gray-300 transition duration-200 pt-[80px] hidden"
    >
        <nav class="flex flex-col px-8 w-full mt-20 transition max-w-fix duration-300">
            <ScrollArea>
                <SubMenu :menu-list="menuList" />
            </ScrollArea>
        </nav>
    </div>
</template>

<script setup>
// * LIB
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// * IMPOR
import { useAuthStore } from '@/stores/modules/auth';
import { ScrollArea } from '@/components/ui/scroll-area';
import SubMenu from './Menu/SubMenu.vue';
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const menuList = computed(() => authStore.showMenuListGet);
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));

const subMenuList = ref([]);
watch(
    () => [menuList, route],
    () => {
        if (!menuList.value.length) return;
        const menuItem = menuList.value.filter((item) => {
            return route.path === item.path || `/${route.path.split('/')[1]}` === item.path;
        });
        if (menuItem[0].children?.length) return (subMenuList.value = menuItem[0]?.children);
        subMenuList.value = [];
    },
    {
        deep: true,
        immediate: true
    }
);
</script>

<style lang="scss" scoped></style>
