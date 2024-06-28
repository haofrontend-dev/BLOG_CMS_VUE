<script setup>
// * LIB
import { RouterLink } from 'vue-router';
import { Menu, Bell } from 'lucide-vue-next';

// * IMPORT
import AppContainer from '@/components/App/Container.vue';
</script>

<template>
    <header class="h-[80px] w-full fixed bg-[#2D3748] border-b border-gray-300 shadow">
        <AppContainer class="w-full md:max-w-full">
            <div class="flex h-full items-center justify-between">
                <!-- Button show menu mobile -->
                <Button variant="outline" size="icon" class="flex md:hidden">
                    <Menu />
                </Button>

                <!-- Avatar CMS -->
                <RouterLink to="/" class="flex items-center gap-2">
                    <img src="@/assets/Group.svg" class="hidden md:block" />
                    <span class="text-lg md:text-xl font-medium text-white">TingTing <strong class="text-teal-500">CMS</strong></span>
                </RouterLink>

                <!-- User Action -->
                <div class="flex items-center gap-6">
                    <button variant="outline" size="icon" class="bg-transparent text-white hover:text-black relative hidden md:flex">
                        <Bell class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </AppContainer>
    </header>
</template>

<style lang="scss" scoped></style>
