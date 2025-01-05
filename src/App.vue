<script setup lang="ts">
import Hello from './components/Hello.vue'

</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/WoodTail_256.svg" class="logo WoodTail" alt="WoodTail logo" />
    </a>
    <a href="https://thebook.常之书.site/" target="_blank">
      <img src="/assets/TheBook_256.svg" class="logo TheBook" alt="TheBook logo" />
    </a>
  </div>
  <Hello msg="欢迎来到木尾维修的杂物间" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.WoodTail:hover {
  filter: drop-shadow(0 0 3em #32de8a);
}
.logo.TheBook:hover {
  filter: drop-shadow(0 0 3em #ff9f1c);
}
</style>
