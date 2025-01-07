<script setup lang="ts">
import Hello from './components/Hello.vue'
import ThemeSwitch from "./components/basic/ThemeSwitch.vue";
import CyberWoodenFish from "./components/alternate/CyberWoodenFish.vue";
import Top from "./components/basic/Top.vue";
import Placeholder from "./components/basic/Placeholder.vue";
import Bottom from "./components/basic/Bottom.vue";
</script>

<template>

  <ThemeSwitch/>
  <top/>

  <div class="m-1 p-0 w-840">
    <div class="box-1 m-4 py-5">
      <Hello h1="欢迎来到木尾维修的杂物间" h2="木尾组件库" />
    </div>

    <div class="box-1 m-4 py-5 shadow-out" >
      <cyber-wooden-fish/>
    </div>

    <div class="m-4 py-5">
        <placeholder class="box-1 shadow-out my-4" />
        <placeholder class="box-1 shadow-out"/>
    </div>

    <div class="flex box-1">
      <placeholder class="box-1 m-4 shadow-out" />
      <placeholder class="box-1 m-4 shadow-out" />
    </div>

    <div class="flex box-1 shadow-in mx-4 my-5">
      <placeholder />
      <placeholder />
      <placeholder />
    </div>

  </div>

<bottom/>
</template>




<style scoped>
.w-840{
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

</style>
