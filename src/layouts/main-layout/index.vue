<script setup>
import { GlobalContent } from '@/layouts/modules/index.js';
import AppHeader from '../components/AppHeader.vue'
import AppSidebar from '../components/AppSidebar.vue'
</script>

<template>
    <div class="w-full h-screen">
        <AppHeader />
        <div class="flex">
            <AppSidebar />
            <div class="pt-[80px]">
                <GlobalContent />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
