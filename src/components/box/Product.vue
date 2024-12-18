<script setup lang="ts">
const props = defineProps<{
    item: any
}>()

const emit = defineEmits(['openDetail'])
</script>

<template>
    <div class="product-img hover:scale-90 transition delay-150 duration-300 ease-in-out">
        <a @click="emit('openDetail')" class="add-cart">
            <i class='bx bx-cart-add'></i>
        </a>
        <img :src="item?.img">
    </div>
    <div class="product-details">
        <a href="#" class="p-name">{{ item?.name }}</a>
        <span class="p-price">{{ item?.price }}</span>
    </div>
</template>
