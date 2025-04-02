<script setup>
import AboutSite from './components/AboutSite.vue'
import FooterSiteVue from './components/FooterSite.vue'
import MenuSite from './components/MenuSite.vue'
import MyWorksSite from './components/MyWorksSite.vue'
</script>

<template>
  <div class="ct-total">
    <MenuSite />
    <router-view></router-view>
    <MyWorksSite />
    <AboutSite />
    <FooterSiteVue />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url('./img/bg-01.jpg');
  background-image: linear-gradient(15deg, #040c11 0%, #112926 100%);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ct-total {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
