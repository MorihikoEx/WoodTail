<script setup lang="ts">
import Hello from './components/Hello.vue'
import ThemeSwitch from "./components/main/ThemeSwitch.vue";
import CyberWoodenFish from "./components/alternate/CyberWoodenFish.vue";

</script>

<template>
  <ThemeSwitch/>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/WoodTail_256.svg" class="logo WoodTail" alt="WoodTail logo" />
    </a>
    <a href="https://thebook.常之书.site/" target="_blank">
      <img src="./assets/TheBook_256.svg" class="logo TheBook" alt="TheBook logo" />
    </a>
  </div>
  <Hello h1="欢迎来到木尾维修的杂物间" h2="木尾组件库" />
  <div class="card">
    <cyber-wooden-fish/>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.WoodTail:hover {
  filter: drop-shadow(0 0 2.5em #216869);
}
.logo.TheBook:hover {
  filter: drop-shadow(0 0 2.5em #ff9f1c);
}
</style>
