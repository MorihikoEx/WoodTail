<script setup lang="ts">
import Hello from './components/Hello.vue'
import ThemeSwitch from "./components/basic/ThemeSwitch.vue";
import CyberWoodenFish from "./components/alternate/CyberWoodenFish.vue";
import Top from "./components/basic/Top.vue";
import Placeholder from "./components/basic/Placeholder.vue";
</script>

<template>
  <ThemeSwitch/>
  <top/>
  <div class="container my-4">
    <Hello h1="欢迎来到木尾维修的杂物间" h2="木尾组件库" />
  </div>

  <div class="container my-4 py-4 box" >
    <cyber-wooden-fish/>
  </div>

  <div class="container">
    <div class="row">
      <div class="box my-4"><placeholder/></div>
      <div class="box my-4"><placeholder/></div>
    </div>
  </div>

  <div class="container shadow my-4">
    <placeholder/>
    <placeholder/>
  </div>

  <div class="container box my-4">
    <div class="row">
      <placeholder/>
      <placeholder/>
      <placeholder/>
    </div>

  </div>
</template>




<style scoped>

</style>
