<script setup lang="ts">
import Logo from '../public/logo.png'

const login = ref()
const isActiveSearch = ref(false)
function handleSearch(mode: boolean) {    
    isActiveSearch.value = mode
}
function handleLogin() {    
    login.value = 'login'
}


</script>

<template>
    <nav>
        <div class="social-call">
            <!--social-links--->
            <div class="social">
                <NuxtLink to="#"><i class='bx bxl-facebook'></i></NuxtLink>
                <NuxtLink to="#"><i class='bx bxl-twitter'></i></NuxtLink>
                <NuxtLink to="#"><i class='bx bxl-youtube'></i></NuxtLink>
                <NuxtLink to="#"><i class='bx bxl-instagram'></i></NuxtLink>
            </div>
            <!--phone-number------>
            <div class="phone">
                <span>Call: +123456789</span>
            </div>
        </div>
        <!--menu-bar----------------------------------------->
        <div class="navigation">
            <!--logo------------>
            <NuxtLink to="#" class="logo"><img :src="Logo"></NuxtLink>
            <!--menu----------------->
            <ul class="menu">
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
            <!--right-menu----------->
            <div class="right-menu flex gap-2 cursor-pointer">
                <div @click="handleSearch(true)" class="search">
                    <i class='bx bx-search'></i>
                </div>
                <div @click="handleLogin" class="user">
                    <i class='bx bx-user'></i>
                </div>
                <div href="#">
                    <i class="bx bx-cart">
                        <span class="num-cart-product">0</span>
                    </i>
                </div>
            </div>
        </div>
        <Search v-model="isActiveSearch" @close="isActiveSearch = false"/>
    </nav>
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
}

nav {
    width: 100%;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
    z-index: 100;
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


</style>


