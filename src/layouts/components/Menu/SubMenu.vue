<template>
    <ul class="w-full flex flex-col">
        <li v-for="subItem in menuList" :key="subItem.path" class="w-full my-1">
            <div v-if="subItem.children?.length" class="transition duration-300 max-h-fit">
                <div
                    variant="ghost"
                    size="lg"
                    class="w-full text-lg justify-between"
                    :class="{ 'bg-teal-500 text-white': isActive(subItem.path) }"
                    @click="handleShowMemu"
                >
                    <Icon :icon="subItem.meta.icon" />
                    <span class="sle">{{ subItem.meta.title }}</span>
                    <Icon icon="material-symbols:arrow-drop-down" class="text-2xl" />
                </div>
                <SubMenu v-if="isOpenMenu" :menu-list="subItem.children" class="pl-3" />
            </div>

            <div
                v-else
                variant="ghost"
                size="lg"
                class="w-full text-lg justify-start gap-3"
                :class="{ 'bg-teal-500 text-white': isActive(subItem.path) }"
                @click="handleClickMenu(subItem)"
            >
                <Icon :icon="subItem.meta.icon" />
                <span class="">{{ subItem.meta.title }}</span>
            </div>
        </li>
    </ul>
</template>

<script setup>
// * LIB
import { defineProps, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

// * IMPORT
defineProps({
    menuList: Array
});

const router = useRouter();
const isOpenMenu = ref(false);

const handleShowMemu = () => {
    isOpenMenu.value = !isOpenMenu.value;
};

const handleClickMenu = (subItem) => {
    if (subItem.meta.isLink) return window.open(subItem.meta.isLink, '_blank');
    router.push(subItem.path);
};

const isActive = (path) => {
    return router.currentRoute.value.path === path;
};
</script>

<style lang="css" scoped></style>
