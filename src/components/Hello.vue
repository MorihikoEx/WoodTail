<script lang="ts" setup>
defineProps<{h1: string ; h2: string }>()
</script>

<template>
  <h1>{{ h1 }}</h1>
  <h2>{{ h2 }}</h2>
  <p class="light">更简约，更温和，更容易</p>
  <p class="light"><s>以及会让所有前端工程师都发出尖锐爆鸣的不规范无结构</s></p>
</template>

<style scoped>
h2{
  margin-top: -1em;
}
</style>
