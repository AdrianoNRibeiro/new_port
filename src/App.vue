<script setup>
import FooterSiteVue from './components/FooterSite.vue'
import MenuSite from './components/MenuSite.vue'
</script>

<template>
  <div class="ct-total">
    <MenuSite />

    <router-view></router-view>
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
  overflow-x: hidden;
  overflow-y: hidden;
}

.ct-total {
  width: 100%;
  overflow: hidden;
}
</style>
