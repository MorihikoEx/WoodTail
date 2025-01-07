<script lang="ts" setup>
defineProps<{h1: string ; h2: string }>()

</script>

<template>

  <a href="https://wood-tail.常之书.site/" target="_blank">
    <img src=../assets/WoodTail_256.svg class="logo WoodTail" alt="WoodTail logo" />
  </a>
  <a href="https://thebook.常之书.site/" target="_blank">
    <img src=../assets/TheBook_256.svg class="logo TheBook" alt="TheBook logo" />
  </a>
  <h1>{{ h1 }}</h1>
  <h2>{{ h2 }}</h2>
  <p class="light">更简约，更温和，更方便</p>
  <p class="light">以及绝美的精神状态</p>
</template>

<style scoped>
.logo.WoodTail:hover {
  filter: drop-shadow(0 0 2.5em #6ec8ca);
}
.logo.TheBook:hover {
  filter: drop-shadow(0 0 2.5em #ffffff);
}
</style>
