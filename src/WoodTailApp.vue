<script setup lang="ts">
import WtThemeSwitch from "./components/Wt-ThemeSwitch.vue";
import Hello from "./components/Hello/Hello.vue";
import WtPlaceholder from "./components/Hello/Wt-Placeholder.vue";
import WtFooter from "./components/Wt-Footer.vue";
import WtHeader from "./components/Wt-Header.vue";
import WtLabel from "./components/Hello/Wt-Label.vue";
import CyberWoodenFish from "./components/Hello/CyberWoodenFish.vue";
import WtColorPalette from "./components/Hello/Wt-ColorPalette.vue";
</script>

<template>
<wt-theme-switch/>
  <wt-header/>
  <div class="box" id="body-box" >
    <hello h1="欢迎来到木尾维修的杂物间" h2="别不知足了，这可是全汉灼最好的装修方案！"/>

    <div class="flex-x ">
      <div class="box shadow flex-y ">
        <wt-label/>
        <wt-label/>
        <wt-label/>
      </div>
      <cyber-wooden-fish class="shadow" />
    </div>
<wt-color-palette/>

    <wt-placeholder class="shadow "/>
    <div class="flex-x ">
      <wt-placeholder class="shadow"/>
      <wt-placeholder class="shadow-inset "/>
    </div>


  </div>
  <wt-footer/>

</template>




<style scoped>

</style>
