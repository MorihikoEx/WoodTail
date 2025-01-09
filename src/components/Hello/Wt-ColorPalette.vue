<script setup lang="ts">

</script>

<template>
<div class="box shadow-inset minor flex-x mb-5 p-1" id="palette-box">

  <div class="box palette color-light"></div>
  <div class="box palette color-a"></div>
  <div class="box palette color-b"></div>
  <div class="box palette color-c"></div>
  <div class="box palette color-dark"></div>

</div>
</template>

<style scoped>
#palette-box{
  flex-wrap: nowrap;
}
.palette{
  height: 3.5rem;
  width: auto;
  margin: 0.6rem;
  padding: 0;
  box-shadow: 4px 4px 10px var(--color-shadow1),
  -4px -4px 10px var(--color-shadow2);
}



</style>
