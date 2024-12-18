<script setup lang="ts">
import Logo from '../public/logo.png'
import Slider1 from '../public/Slider_01.jpg'
import Slider2 from '../public/Slider_02.jpg'
import Slider3 from '../public/Slider_03.jpg'
import Slider4 from '../public/Slider_04.jpg'

const login = ref()
const isActiveSearch = ref(false)
function handleSearch(mode: boolean) {
    isActiveSearch.value = mode
}
function handleLogin() {
    login.value = 'login'
}

const sliders = [Slider1, Slider2, Slider3, Slider4]
const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

const { x, y } = useWindowScroll()

const isFixed = ref(false)
watch(() => y, () => {
    if (y.value > 0) {
        isFixed.value = true
    } else {
        isFixed.value = false
    }
}, { deep: true })
</script>

<template>
    <nav
        :class="{ 'fixed top-0 w-full shadow-md bg-white transition-all duration-500 ease-in-out opacity-100 translate-y-0': isFixed }">
        <div class="social-call">
            <div class="social">
                <NuxtLink to="#"><i class='bx bxl-facebook'></i></NuxtLink>
                <NuxtLink to="#"><i class='bx bxl-twitter'></i></NuxtLink>
                <NuxtLink to="#"><i class='bx bxl-youtube'></i></NuxtLink>
                <NuxtLink to="#"><i class='bx bxl-instagram'></i></NuxtLink>
            </div>
            <div class="phone">
                <span>Call: +123456789</span>
            </div>
        </div>

        <div class="toggle cursor-pointer" @click="toggleMenu">
            <i class="bx bx-menu"></i>
        </div>
        <div class="navigation" :class="{ 'active': !isMenuOpen }">
            <NuxtLink to="#" class="logo "><img :src="Logo"></NuxtLink>
            <ul class="menu" :class="{ 'is-open': isMenuOpen }">
                <li>
                    <NuxtLink to="/home">Home</NuxtLink>
                </li>
                <li class="shop">
                    <NuxtLink to="/shop">Shop</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/men">Men</NuxtLink>
                    <span class="sale-lable">Sale</span>
                </li>
                <li>
                    <NuxtLink to="/women">Women</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/kids">Kids</NuxtLink>
                </li>
            </ul>
            <div class="right-menu flex gap-2 cursor-pointer">
                <div @click="handleSearch(true)" class="search">
                    <i class='bx bx-search'></i>
                </div>
                <div @click="handleLogin" class="user">
                    <i class='bx bx-user'></i>
                </div>
                <div>
                    <i class="bx bx-cart">
                        <span class="num-cart-product">0</span>
                    </i>
                </div>
            </div>
        </div>
        <Search v-model="isActiveSearch" @close="isActiveSearch = false" />
    </nav>
    <el-carousel height="65vh">
        <el-carousel-item v-for="item in sliders" :key="item">
            <img :src="item" class="bg-cover w-100% h-100%" />
        </el-carousel-item>
    </el-carousel>
    <Login v-model="login" @change-mode="login = $event" @close="login = ''" />
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    margin: 0px;
    padding: 0px;
    font-family: poppins;
    background-color: #ffffff;
}

* {
    box-sizing: border-box;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

nav {
    width: 100%;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
    z-index: 100;    
}

.toggle {
    display: none;
}

.social-call {
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
}

.social a,
.social NuxtLink {
    margin: 0px 5px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.9rem;
}

.phone {
    color: rgba(0, 0, 0, 0.7);
    margin-left: 30px;
    font-size: 0.9rem;
}

.social a:hover,
.social NuxtLink:hover {
    color: #0b9d8a;
    transition: all ease 0.3s;
}

.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 45px;
}

.logo img {
    height: 30px;
}

.menu {
    display: flex;
    align-items: center;
}

.menu li {
    position: relative;
    margin: 20px;
    display: flex;
    text-transform: uppercase;
    font-weight: 500;
}

.menu li a .menu li NuxtLink {
    color: #555555;
    text-decoration: none;
}

.right-menu a .right-menu NuxtLink {
    margin: 0px 10px;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.7);
}

.menu a:hover,
.menu NuxtLink:hover,
.right-menu a:hover,
.right-menu NuxtLink:hover,
.search-cancel:hover,
.form-cancel:hover {
    color: #0b9d8a;
    transition: all ease 0.3s;
}

.sale-lable {
    width: 38px;
    height: 17px;
    background-color: #f76b6a;
    color: #ffffff;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    text-transform: uppercase;
    position: absolute;
    top: -20px;
    right: -20px;
}

.sale-lable:after {
    content: '';
    width: 0px;
    height: 0px;
    border-bottom: 5px solid transparent;
    border-left: 3px solid transparent;
    border-top: 7px solid #f76b6a;
    border-right: 5px solid transparent;
    position: absolute;
    left: 10%;
    top: 100%;
}

.bx-cart {
    position: relative;
}

.num-cart-product {
    position: absolute;
    top: -17px;
    right: -17px;
    width: 25px;
    height: 25px;
    font-size: 0.8rem;
    border-radius: 50%;
    background-color: #0b9d8a;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
}

/* CSS Mobile */
.menu {
    display: flex;
    transition: all 0.3s ease-in-out;
}

.menu.hidden {
    display: none;
    /* Ẩn menu */
}

/* Mobile Styles */
.menu-icon {
    display: none;
    font-size: 2rem;
    cursor: pointer;
    color: #555555;
}

.menu.is-open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
}

@media (max-width: 768px) {
    .menu {
        display: none;
    }

    .menu-icon {
        display: flex;
        justify-content: end;
    }

    .menu.is-open {
        display: flex;
    }

    .toggle {
        display: flex !important;
        justify-content: end;
        position: absolute;
        z-index: 1000;
        top: 4px;
        right: 4px;
        font-size: 36px;
    }
}

@media (min-width: 769px) {
    .menu {
        display: flex !important;
    }
}
</style>
