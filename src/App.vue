<script setup>
import MenuSite from './components/MenuSite.vue'
</script>

<template>
  <div class="ct-total">
    <MenuSite />
    <router-view></router-view>
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
}
</style>
