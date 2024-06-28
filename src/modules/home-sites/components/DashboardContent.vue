<template>
    <h2 class="text-4xl font-bold text-[#2D3748]">Dashboard</h2>
    <span class="text-sm text-gray-400 font-medium">Hi Hüseyin, welcome back!</span>
    <div class="mb-4 mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="totalItem in listTotalMonth" :key="totalItem.label">
            <TotalCountUI :total-item="totalItem" />
        </div>
    </div>
    <div class="mt-20">
        <ListPostData :items="listpPostData"></ListPostData>
    </div>
</template>

<script setup>
import dayjs from 'dayjs';

import TotalCountUI from "./TotalCountUI.vue";
import ListPostData from "./ListPostData.vue";

const listTotalMonth = [
    {
        label: 'Total View',
        persional: 22,
        counted: 287000,
        status: 1
    },
    {
        label: 'Total Download',
        persional: 22,
        counted: 238,
        status: 2
    },
    {
        label: 'Total Read',
        persional: 22,
        counted: 238,
        status: 1
    },
    {
        label: 'Total Comments',
        persional: 22,
        counted: 238,
        status: 1
    }
]

const listpPostData = [
    ...Array(10).fill(0).map((_, index) => {
        const randomNum = Math.floor(Math.random() * 1000000);
        return {
            id: index + 1,
            title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Post ${index + 1}`,
            tags: [
                `Tag ${index % 5 + 1}`
            ],
            created_at: dayjs().subtract(index, 'day').format('YYYY-MM-DD'),
            totalView: Math.floor(Math.random() * 5000),
            totalComments: Math.floor(Math.random() * 100),
            author: `Author ${index % 5 + 1}`,
            image_post: `https://via.placeholder.com/200x300?text=${randomNum}`
        };
    }),
]
</script>

<style lang="scss" scoped></style>
