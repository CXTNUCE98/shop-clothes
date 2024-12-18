<script setup lang="ts">
const props = defineProps<{
    modelValue: boolean
    productInfo: any
}>()

const emit = defineEmits(['update:modelValue'])
const visible = useVModel(props, 'modelValue', emit)
const rate = ref()

const selectedColor = ref('')
const selectedSize = ref('')
const quantity = ref(0)
function selectColor(color: string) {
    selectedColor.value = color
}
function selectSize(color: string) {
    selectedSize.value = color
}
</script>

<template>
    <el-dialog v-model="visible" width="80%" align-center destroy-on-close>
        <div class="flex gap-4 flex-wrap px-8">
            <div class="flex-1 min-w-200px">
                <img :src="productInfo?.img" />
            </div>
            <div class="flex-1">
                <div class="font-bold text-2xl">{{ (productInfo?.name).toUpperCase() }}</div>
                <div class="flex gap-2 items-center py-2">
                    <el-rate v-model="rate" allow-half />
                    <span>3 Reviews</span>
                </div>
                <div class="flex gap-4 items-end">
                    <div class="line-through text-xl">{{ productInfo?.price }}</div>
                    <div class="text-2xl">{{ productInfo?.price }}</div>
                </div>
                <div class="py-4">
                    Áo sơ mi nam cổ điển – Với thiết kế hiện đại, chất liệu cotton cao cấp mang lại sự thoải mái và thoáng
                    mát cả ngày. Phù hợp cho mọi dịp, từ công sở đến dạo phố.
                </div>
                <div class="text-lg font-bold pb-2">
                    COLOR:
                </div>
                <div class="flex gap-1">
                    <div class="color-picker" :class="{ 'border-black': selectedColor === '#333' }"
                        style="background-color: #333;" @click="selectColor('#333')">
                    </div>
                    <div class="color-picker" :class="{ 'border-black': selectedColor === '#10467B' }"
                        style="background-color: #10467B;" @click="selectColor('#10467B')">
                    </div>
                    <div class="color-picker" :class="{ 'border-black': selectedColor === '#ccc' }"
                        style="background-color: #ccc;" @click="selectColor('#ccc')">
                    </div>
                    <div class="color-picker" :class="{ 'border-black': selectedColor === '#fff' }"
                        style="background-color: #fff;" @click="selectColor('#fff')">
                    </div>
                </div>
                <div class="text-lg font-bold py-2">
                    SIZE:
                </div>
                <div class="flex gap-1">
                    <div class="color-picker flex justify-center items-center"
                        :class="{ 'border-black': selectedSize === 'S' }" @click="selectSize('S')"> S </div>
                    <div class="color-picker flex justify-center items-center"
                        :class="{ 'border-black': selectedSize === 'M' }" @click="selectSize('M')"> M </div>
                    <div class="color-picker flex justify-center items-center"
                        :class="{ 'border-black': selectedSize === 'L' }" @click="selectSize('L')"> L </div>
                    <div class="color-picker flex justify-center items-center"
                        :class="{ 'border-black': selectedSize === 'XL' }" @click="selectSize('XL')"> XL </div>
                    <div class="color-picker flex justify-center items-center"
                        :class="{ 'border-black': selectedSize === 'XS' }" @click="selectSize('XS')"> XS </div>
                </div>
                <div class="flex gap-4 py-8">
                    <el-button type="info" color="#333">ADD TO CART</el-button>
                    <el-input-number class="w-40px" v-model="quantity" :min="1" />
                </div>
                <el-divider />
                <div>
                    <div><span class="font-semibold">SKU:</span> 111263</div>
                    <div><span class="font-semibold">Category:</span> Woman Bags</div>
                    <div><span class="font-semibold">Tags:</span> Elegare, Pink, Summer</div>
                </div>
                <el-divider />
                <div class="flex justify-between">
                    <div class="font-semibold">Share: </div>
                    <div class="flex gap-2 text-16px">
                        <div class="cursor-pointer"><i class='bx bxl-facebook'></i></div>
                        <div class="cursor-pointer"><i class='bx bxl-twitter'></i></div>
                        <div class="cursor-pointer"><i class='bx bxl-youtube'></i></div>
                        <div class="cursor-pointer"><i class='bx bxl-instagram'></i></div>
                    </div>
                </div>
                <el-divider />
            </div>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="visible = false">Cancel</el-button>
                <el-button type="primary" @click="visible = false">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<style scoped>
.color-picker {
    border: 1px solid #ccc;
    cursor: pointer;
    width: 30px;
    height: 30px;
}

.color-picker.border-black {
    border: 2px solid rgb(243, 80, 16);
}
</style>