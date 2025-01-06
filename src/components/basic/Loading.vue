<script setup lang="ts">
const props = defineProps
</script>

<template>
  <div class="loading" v-bind="props" ></div>
</template>

<style scoped>
.loading,
.loading[a] {
  display: block;
  position: relative;
  width: 9px;
  height: 20px;
  animation: rectangle infinite 1s ease-in-out -0.2s;
  background-color: var(--wt-loading-color1) ;
}

.loading:before,
.loading:after ,
.loading[a]:before,
.loading[a]:after ,
.loading[bicolor]:before,
.loading[bicolor]:after {
  position: absolute;
  width: 9px;
  height: 20px;
  content: "";
  background-color: var(--wt-loading-color1); ;
}

.loading:before {
  left: -14px;
  animation: rectangle infinite 1s ease-in-out -0.4s;
}

.loading:after {
  right: -14px;
  animation: rectangle infinite 1s ease-in-out;
}

.loading[b],
.loading[b]:before,
.loading[b]:after,
.loading[bicolor] {
  background-color: var(--wt-loading-color2);
}



@keyframes rectangle {
  0%,
  80%,
  100% {
    transform: scaleY(1);
    border-radius: 15px;
  }

  40% {
    transform: scaleY(1.5);
    border-radius: 15px;
  }
}
</style>

