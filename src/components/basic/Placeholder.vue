<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const containerSize = ref({ width: window.innerWidth, height: window.innerHeight });

const updateSize = () => {
  containerSize.value.width = window.innerWidth;
  containerSize.value.height = window.innerHeight;
};

// 使用生命周期钩子来管理事件监听
onMounted(() => {
  window.addEventListener('resize', updateSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSize);
});
</script>

<template>
  <div class="col m-0 px-0 py-5">
    <h1 class="light">{{ containerSize.width }} * {{ containerSize.height }}</h1>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.col {
  width: 100%;
  height: 100%;
}
</style>


