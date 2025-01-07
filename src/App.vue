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
  <div class="m-1 p-0 w-820">
    <div class=" m-4">
      <Hello h1="欢迎来到木尾维修的杂物间" h2="木尾组件库" />
    </div>

    <div class=" m-4 py-4 shadow" >
      <cyber-wooden-fish/>
    </div>

    <div class="m-4 py-5">
        <placeholder class="shadow my-4" />
        <placeholder class="shadow"/>
    </div>

    <div class="flex">
      <placeholder class="m-4 shadow" />
      <placeholder class=" m-4 shadow" />
    </div>

    <div class="flex box shadow m-4">
        <placeholder />
      <placeholder />
      <placeholder />
    </div>

  </div>

</template>




<style scoped>
.w-820{
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

</style>
