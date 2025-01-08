<script lang="ts" setup>
defineProps<{h1: string ; h2: string }>()
</script>

<template>

  <a href="https://wood-tail.常之书.site/" target="_blank">
    <img src=../../assets/icon/WoodTail_256.svg class="logo" alt="WoodTail logo" />
  </a>
  <a href="https://thebook.常之书.site/" target="_blank">
    <img src=../../assets/icon/TheBook_256.svg class="logo" alt="TheBook logo" />
  </a>
  <h1>{{ h1 }}</h1>
  <h2>{{ h2 }}</h2>
  <p class="light">更简约，更温和，更方便</p>
  <p class="light">&gt;<a>以及绝美的精神状态</a>&lt;</p>

</template>

<style scoped>
a{
  cursor: help;
}

</style>
