<template>
    <component :is="LayoutComponents[layout]" />
</template>

<script setup name="layout">
import { computed } from 'vue';

import MainLayout from './main-layout/index.vue';
import AuthLayout from './auth-layout/index.vue';
import { useGlobalStore } from '@/stores/modules/global';
const LayoutComponents = {
    main: MainLayout,
    auth: AuthLayout
};

const globalStore = useGlobalStore();
const layout = computed(() => globalStore.layout);
</script>

<style lang="scss" scoped></style>
