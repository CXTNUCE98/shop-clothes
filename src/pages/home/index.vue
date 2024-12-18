<script setup lang="ts">
import Feature1 from '../../public/feature_1.jpg'
import Feature2 from '../../public/feature_2.jpg'
import Feature3 from '../../public/feature_3.jpg'
import Feature4 from '../../public/feature_4.jpg'
import Feature5 from '../../public/feature_5.jpg'
import Feature6 from '../../public/feature_6.jpg'

import Product1 from '../../public/p-1.png'
import Product2 from '../../public/p-2.png'
import Product3 from '../../public/p-3.png'
import Product4 from '../../public/p-4.png'
import Product5 from '../../public/p-5.png'
import Product6 from '../../public/p-6.png'
import Product7 from '../../public/p-7.png'
import Product8 from '../../public/p-8.png'

import Sale1 from '../../public/sale-1.jpg'
import Sale2 from '../../public/sale-2.jpg'
import Sale3 from '../../public/sale-3.jpg'

const categories = [
    {
        name: 'T-Shirts',
        img: Feature1,
    },
    {
        name: 'Men T-Shirts',
        img: Feature2,
    },
    {
        name: 'Kids T-Shirts',
        img: Feature3,
    },
    {
        name: 'Pillow',
        img: Feature4,
    },
    {
        name: 'Phone Cover',
        img: Feature5,
    },
    {
        name: 'Shopping Bags',
        img: Feature6,
    }
]

const products = [
    {
        name: 'Drawstring T-Shirt',
        img: Product1,
        price: '$22.00',
    },
    {
        name: 'Drawstring T-Shirt',
        img: Product2,
        price: '$22.00',
    },
    {
        name: 'Drawstring T-Shirt',
        img: Product3,
        price: '$22.00',
    },
    {
        name: 'Drawstring T-Shirt',
        img: Product4,
        price: '$22.00',
    },
    {
        name: 'Drawstring T-Shirt',
        img: Product5,
        price: '$22.00',
    },
    {
        name: 'Drawstring T-Shirt',
        img: Product6,
        price: '$22.00',
    },
    {
        name: 'Drawstring T-Shirt',
        img: Product7,
        price: '$22.00',
    },
    {
        name: 'Drawstring T-Shirt',
        img: Product8,
        price: '$22.00',
    },
]

const sales = [{
    name: 'Bag with rose pattern',
    img: Sale1,
    des: 'Sale off 25%',
},
{
    name: 'Hello Summer',
    img: Sale2,
    des: 'Sale off 20%',
},
{
    name: "Let's Party Hard Pillow",
    img: Sale3,
    des: 'Sale off 25%',
},
]

function getRandomProducts(pds: any, count: number) {
    const shuffled = [...pds].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const visibleDetail = ref(false)

const curProductInfo = ref()
function openDetailProduct(info: any) {
    visibleDetail.value = true
    curProductInfo.value = info
}
</script>

<template>
    <div class="flex justify-center pt-10 pb-2">
        <div class="p-2 border font-semibold">
            FEATURED CATEGORIES
        </div>
    </div>

    <ul id="autoWidth" class="container cs-hidden">
        <li v-for="item in categories" :key="item.img" class="item hover:-translate-y-6 transition delay-150 duration-300 ease-in-out">
            <div class="feature-box">
                <a href="#">
                    <img :src="item.img">
                </a>
            </div>
            <span>{{ item.name }}</span>
        </li>
    </ul>

    <!-- Products -->
    <section class="new-arrival">
        <div class="arrival-heading">
            <strong>New Arrival</strong>
            <p>We Provide You New Fasion Design Clothes</p>
        </div>
        <div class="product-container">
            <div v-for="item in products" :key="item.img" class="product-box">
                <BoxProduct :item="item" @open-detail="openDetailProduct(item)"/>
            </div>
        </div>
    </section>

    <!-- Sale Offer Boxes -->
    <section class="sale">
        <div v-for="item in sales" :key="item.img" class="sale-box sale-1">
            <img :src="item.img">
            <a href="#">
                <div class="sale-text">
                    <strong>{{ item.name }}</strong>
                    <span>{{ item.des }}</span>
                </div>
            </a>
        </div>
    </section>

    <!-- Featured items -->
    <section class="feature-item">
        <div class="arrival-heading">
            <strong>Featured Items</strong>
            <p>We Provide You New Fasion Design Clothes</p>
        </div>
        <div class="product-container">
            <div class="product-box" v-for="item in getRandomProducts(products, 4)">
                <div class="product-img hover:scale-90 transition delay-150 duration-300 ease-in-out">
                    <a href="#" class="add-cart"> <i class='bx bx-cart-add'></i></a>
                    <img :src="item.img">
                </div>
                <div class="product-details">
                    <a href="#" class="p-name">{{ item.name }}</a>
                    <span class="p-price">{{ item.price }}</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Sale Banner -->
    <div class="banner-box f-slide-3">
        <div class="banner-text-container">
            <div class="banner-text">
                <span>Limited Offer</span>
                <strong>30% Off<br /> With <font>Promo Code</font></strong>
                <a href="#" class="banner-btn">Shop Now</a>
            </div>
        </div>
    </div>

    <!-- Service -->
    <section class="services">
        <div class="services-box">
            <i class='bx bx-package'></i>
            <span>Free Shipping</span>
            <p>Free Shipping for all US order</p>
        </div>
        <div class="services-box">
            <i class='bx bx-headphone' ></i>
            <span>Support 24/7</span>
            <p>We support 24h a day</p>
        </div>
        <div class="services-box">
            <i class='bx bx-sync' ></i>
            <span>100% Money Back</span>
            <p>You have 30 days to Return</p>
        </div>
        
    </section>
    <!--footer---------------------------->
    <footer>
        <span class="copyright">
            Copyright 2024 - @TaoCao
        </span>
        <div class="subscribe">
            <form>
            <input type="email" placeholder="Example@gmail.com" required/>
            <input type="submit" value="Subscribe">
            </form>
        </div>
    </footer>
    
    <ProductDetail v-if="visibleDetail" v-model="visibleDetail" :product-info="curProductInfo"/>
</template>

<style>
.feature-heading {
    display: flex;
    justify-content: center;
    align-items: center;
}

.feature-heading h2 {
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: #1b1919;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 40px;
    padding: 5px 30px;
    border: 1px solid #e0e0e0;
}

.feature-box {
    width: 155px;
    height: 160px;
    margin: 0px 20px;
    border-radius: 10px;
    overflow: hidden;
}

.feature-box a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.item span {
    font-size: 1rem;
    font-weight: 600;
    margin: 5px;
    color: #444444;
}

.item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#autoWidth {
    display: flex;
    justify-content: center !important;
    margin: 10px auto 40px auto;
    flex-wrap: wrap;
}

/* New Arrival */
.arrival-heading strong {
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: #1b1919;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 40px;
    padding: 5px 30px;
    border: 1px solid #e0e0e0;
}

.arrival-heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.arrival-heading strong {
    color: #ffffff;
    background-color: #202020;
    font-weight: 500;
}

.arrival-heading p {
    color: #808080;
    margin: 10px;
    font-size: 0.9rem;
}

.product-container {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
}

.product-box {
    display: flex;
    flex: 0 1 calc(20%);
    flex-grow: 0.5;
    flex-direction: column;
    align-items: center;
    border: 1px solid #f7f7f7;
    border-radius: 10px;
    margin: 20px;
}

.product-img {
    width: 200px;
    height: 210px;
    margin: 20px;
    cursor: pointer;
    position: relative;
}

.product-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}

.product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    border-top: 1px solid #f3f3f3;
}

.p-name {
    color: #727272;
}

.p-price {
    color: #333333;
    font-size: 1.2rem;
    font-weight: 400;
}

.product-box:hover {
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
}

.add-cart {
    position: absolute;
    right: -20px;
    top: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #0b9d8a;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
    display: none;
    animation: fade 0.3s;

}

.add-cart:hover {
    background-color: #f76b6a;
    transition: all ease 0.2s;
}

.product-box:hover .add-cart {
    display: flex;
}

.new-arrival {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.feature-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Sale Offer Boxes */
.sale {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px auto;

}

.sale-box {
    width: 280px;
    border-radius: 20px;
    margin: 20px;
    position: relative;
    flex-grow: 0.5;
}

.sale-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center right;
}

.sale-text {
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translate(-20%, -50%);
    display: flex;
    flex-direction: column;
}

.sale-box a {
    color: #1b1919;
}

.sale-text strong {
    font-size: 1.2rem;
    font-weight: 500;
    width: 80%;
    line-height: 23px;
}

/* Sale banner */
.banner-box {
    width: 100%;
    height: 40vh;
    margin: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../public/Slider_03.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.banner-text-container {
    width: 80%;
    height: 90%;
    display: flex;
    align-items: center;
}

.banner-text {
    display: flex;
    flex-direction: column;
    margin-right: auto;
}

.banner-text strong {
    color: #333333;
    font-size: 3rem;
    line-height: 55px;
    margin-top: 10px;
    letter-spacing: 1px;
}

.banner-text span {
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 500;
    color: #666666;
    font-size: 1.2rem;
}

.banner-btn {
    width: 170px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #0b9d8a;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 14px;
}

.banner-text strong font {
    color: #0b9d8a;
}

/* Footer */
.services{
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
}
.services-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.1);
    min-width: 250px;
    padding: 20px;
    margin: 15px;
    flex-grow: 0.7;
}
.services-box i{
    color: #0b9d8a;
    font-size: 2rem;
    margin: 15px;
}
.services-box span{
    color: #222222;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 1rem;
}
.services-box p{
    color: #878787;
    margin: 0px;
    font-size: 0.9rem;
}
footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-top: 1px solid rgba(0,0,0,0.1);
    flex-wrap: wrap;
    margin-top: 20px;
}
.copyright{
    font-size: 0.9rem;
    color: #4e4e4e;
    letter-spacing: 1px;
}
.subscribe input{
    width:240px;
    height: 43px;
    padding: 0px 20px;
    border: 1px solid rgba(0,0,0,0.1);
    outline: none;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.05);
}
.subscribe input[type="submit"]{
    width:120px;
    background-color: #0b9d8a;
    color: #ffffff;
    margin: 0px 5px;
}
</style>