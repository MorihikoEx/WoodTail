<script setup lang="ts">
import WtThemeSwitch from "./components/Wt-ThemeSwitch.vue";
import Hello from "./components/Hello/Hello.vue";
import WtPlaceholder from "./components/Hello/Wt-Placeholder.vue";
import WtFooter from "./components/Wt-Footer.vue";
import WtHeader from "./components/Wt-Header.vue";
import WtLabel from "./components/Hello/Wt-Label.vue";
</script>

<template>
<wt-theme-switch/>
  <wt-header/>
  <div class="box" >
    <hello h1="欢迎来到木尾维修的杂物间" h2="别不知足了，这可是全汉灼最好的装修方案！"/>

    <div class="my-5">
      <wt-label/>
    </div>

    <wt-placeholder class="shadow m-3 my-5"/>
    <div class="flex">
      <wt-placeholder class="flex shadow m-3"/>
      <wt-placeholder class="flex shadow-inset m-3"/>
    </div>


  </div>
  <wt-footer/>

</template>




<style scoped>

</style>
