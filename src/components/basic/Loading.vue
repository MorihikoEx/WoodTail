<script setup lang="ts">

</script>

<template>
  <div class="loading"></div>
</template>

<style scoped>
.loading {
  display: block;
  position: relative;
  width: 9px;
  height: 20px;
  border-radius: 30%;
  animation: rectangle infinite 1s ease-in-out -0.2s;

  background-color: var(wt--loading-color1);
}

.loading:before,
.loading:after {
  position: absolute;
  width: 9px;
  height: 20px;
  border-radius: 30%;
  content: "";
  background-color: var(wt--);
}

.loading:before {
  left: -14px;

  animation: rectangle infinite 1s ease-in-out -0.4s;
}

.loading:after {
  right: -14px;

  animation: rectangle infinite 1s ease-in-out;
}

.loading color {

}

@keyframes rectangle {
  0%,
  80%,
  100% {
    transform: scaleY(1);
  }

  40% {
    transform: scaleY(1.5);
  }
}

</style>
