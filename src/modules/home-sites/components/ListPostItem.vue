<template>
    <div class="flex items-center">
        <div class="flex items-center gap-10">
            <Avatar :image="item?.image_post" class="mr-2" size="xlarge" shape="circle" />
            <div class="">
                <h4 :v-tooltip="{
                    value: item?.title
                }" class="text-lg font-medium line-clamp-1 max-w-[200px]">{{ item?.title }}</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>

<style lang="scss" scoped>

</style>
