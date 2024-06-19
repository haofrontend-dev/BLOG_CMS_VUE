<template>
    <div :class="cn('container mx-auto h-full')">
        <slot />
    </div>
</template>

<script setup>
import { cn } from "@/lib/utils";
</script>

<style lang="scss" scoped></style>
