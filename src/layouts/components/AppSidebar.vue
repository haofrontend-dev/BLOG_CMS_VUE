<template>
    <div class="card flex h-screen w-60">
        <TieredMenu
            :model="menuList"
            :pt="{
                root: {
                    class: 'pt-[80px]'
                }
            }"
        >
            <template #item="{ item, props, hasSubmenu }">
                <RouterLink
                    v-if="!hasSubmenu"
                    :to="item.path"
                    v-ripple
                    class="flex items-center"
                    :class="{ 'bg-green-200': isActive(item.path) }"
                    v-bind="props.action"
                >
                    <Icon :icon="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                </RouterLink>
                <a v-else v-ripple class="flex items-center" v-bind="props.action">
                    <Icon :icon="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <i v-if="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
                </a>
            </template>
        </TieredMenu>
    </div>
</template>

<script setup>
// * LIB
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';

// * IMPOR
import { useAuthStore } from '@/stores/modules/auth';
import { convertChildrenToItems } from '@/helpers';
const route = useRoute();
const authStore = useAuthStore();
const menuList = computed(() => convertChildrenToItems(authStore.showMenuListGet));

const isActive = (path) => {
    return route.path === path || `/${route.path.split('/')[1]}` === path;
};

</script>

<style lang="scss" scoped></style>
