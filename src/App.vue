<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/WoodTail_128.svg" class="logo WoodTail" alt="WoodTail logo" />
    </a>
  </div>
  <HelloWorld msg="欢迎来到木尾维修的杂物间" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.WoodTail:hover {
  filter: drop-shadow(0 0 2em #779cab);
}
</style>
