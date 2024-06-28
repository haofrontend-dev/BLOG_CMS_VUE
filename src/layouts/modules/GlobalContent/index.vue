<script setup>
import { computed } from 'vue';

defineOptions({
  name: 'GlobalContent'
});


defineProps({
    showPadding: {
        type: Boolean,
        default: () => true
    },
})

const transitionName = computed(() => (true ? 'left' : 'right'));
</script>

<template>
    <RouterView v-slot="{ Component, route }">
        <Transition
            :name="transitionName"
            mode="out-in"
        >
            <KeepAlive>
                <component
                    :is="Component"
                    :class="{ 'p-16px': showPadding }"
                    class="flex-grow bg-white transition duration-300"
                />
            </KeepAlive>
        </Transition>
    </RouterView>
</template>

<style></style>
