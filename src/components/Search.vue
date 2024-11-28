<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean,
}>()

const isActiveSearch = computed(() => {
    return props.modelValue
})

const emit = defineEmits(['close'])
function handleSearch() {
    emit('close')
}
</script>
<template>
    <div class="search-bar" :class="{'search-bar-active' : isActiveSearch}">
            <!--search-input------->
            <div class="search-input">
                <input type="text" placeholder="Search For Product" name="search"  />
                <!--cancel-btn--->
                <a @click="handleSearch()" class="search-cancel cursor-pointer">
                    <i class='bx bx-x-circle'></i>
                </a>
    
            </div>
        </div>
</template>



<style scoped>
.search-bar {
    width: 100%;
    height: 300px;
    background-color: #ffffff;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    box-shadow: 2px -5px 30px rgba(0, 0, 0, 0.1);
    z-index: 101;
    animation: search 0.3s;
}

.search-input {
    width: 90%;
    border-bottom: 2px solid #555555;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-top: 20px;
}

.search-bar input {
    width: 100%;
    padding: 30px;
    border: none;
    outline: none;
    font-size: 2rem;
    margin: 20px;
    padding: 0px 20px;
}

.search-cancel {
    color: #272727;
    font-size: 2rem;
    padding-right: 40px;
}

.search-bar {
    display: none;
}

.search-bar-active {
    display: flex;
}

@keyframes search {
    0% {
        bottom: -300px;
    }

    100% {
        bottom: 0px;
    }
}
</style>