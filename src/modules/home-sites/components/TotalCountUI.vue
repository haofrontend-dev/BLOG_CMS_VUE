<template>
    <div class="flex flex-col border-r border-gray-300">
        <div class="text-3xl font-semibold text-teal-700">
            <CountUp
                :end-val="totalItem.counted"
                :options="{
                    useIndianSeparators: true
                }"
            />
        </div>
        <div class="flex items-center">
            <span class="text-xs font-normal tracking-wide text-gray-500">
                {{ totalItem.label }}
            </span>
            <Chip
                :pt="{
                    root: {
                        class: cn(
                            totalItem.status === StatusAnaly.Up ? '!bg-lime-300 text-lime-500' : '!bg-red-300 text-red-500',
                            '!rounded-md !py-1 !px-2 ml-4'
                        )
                    }
                }"
            >
                <Icon
                    icon="solar:course-up-bold"
                    :class="cn(totalItem.status === StatusAnaly.Up ? 'text-lime-500 ' : 'text-red-500')"
                />
                <span
                    class="text-sm"
                    :class="cn('font-medium', totalItem.status === StatusAnaly.Up ? 'text-lime-600 ' : 'text-red-600')"
                    >{{ totalItem?.persional }}</span
                >
            </Chip>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import CountUp from 'vue-countup-v3';

import { cn } from '@/lib/utils';
import { StatusAnaly } from '@/constants';

defineProps({
    totalItem: {
        type: Object,
        default: () => {}
    }
});
</script>

<style lang="scss" scoped></style>
