<script lang="ts" setup>
definePageMeta({
  redirect: 'home',
  notAsMenu: true,
})
</script>
    
<template>
  <div class="h-full w-full flex items-center justify-center" />
</template>
  

<style>
@media(max-width:1010px) {
  nav {
    position: relative;
  }

  .navigation {
    height: 80px;
  }

  .fix-nav {
    height: 80px;
  }

  .menu {
    position: absolute;
    top: 110px;
    left: 0px;
    background-color: #ffffff;
    border-bottom: 4px solid #0b9d8a;
    width: 100%;
    padding: 0px;
    margin: 0px;
    z-index: 102;
    flex-direction: column;
    display: none;

  }

  .fix-nav .menu {
    top: 80px;
  }

  .menu li {
    width: 100%;
    margin: 0px;
    padding: 0px;
  }

  .navigation .menu li a {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 25px;
    border: 1px solid rgba(0, 0, 0, 0.03);
  }

  .sale-lable {
    display: none;
  }

  .toggle {
    display: flex;
    justify-content: end;
  }

  .toggle:before {
    content: '\f0c9';
    font-family: fontAwesome;
    line-height: 30px;
    z-index: 1;
    cursor: pointer;
  }

  .toggle.active:before {
    content: '\f00d';
  }

  .navigation.active .menu {
    display: block;
  }

  .full-slider-box,
  .banner-box {
    height: 45vh;
  }

  .f-slider-text span,
  .banner-text span {
    font-size: 0.9rem;
  }

  .f-slider-text strong,
  .banner-text strong {
    font-size: 2rem;
    line-height: 40px;
  }

  .search-input {
    height: 60px;
  }

  .search-input input,
  .search-cancel {
    font-size: 1.4rem;
  }

  .sale-box {
    height: 200px;
  }
}

@media(max-width:600px) {
  .navigation {
    padding: 10px;
  }

  .f-slider-text strong,
  .banner-text strong {
    font-size: 1.2rem;
    line-height: 25px;
  }

  .full-slider-box,
  .banner-box {
    height: 30vh;
  }

  .f-slider-text span,
  .banner-text span {
    font-size: 0.8rem;
  }

  .f-slider-btn,
  .banner-btn {
    width: 120px;
    height: 30px;
    font-size: 0.8rem;
  }

  .feature-heading h2 {
    font-size: 1.2rem;
  }

  .feature-box {
    width: 120px;
    height: 120px;
  }

  .new-arrival strong,
  .feature-heading strong {
    font-size: 1.2rem;
  }

  .new-arrival p,
  .feature-heading p {
    font-size: 0.8rem;
    text-align: center;
  }

  .sale-box {
    width: 100%;
    height: 180px;
  }

  .sale {
    width: 100%;
  }

  .services {
    width: 100%;
  }

  .services-box {
    width: 100%;
  }

  .copyright {
    margin: 20px 0px;
    text-align: center;
  }

  .subscribe {
    width: 100%;
  }

  .subscribe form {
    flex-wrap: nowrap;
    display: flex;
    width: 100%;
  }

  .subscribe input {
    width: 100%;
    flex-grow: 1;
  }

  .login-form,
  .sign-up-form {
    width: 90%;
  }
}</style>