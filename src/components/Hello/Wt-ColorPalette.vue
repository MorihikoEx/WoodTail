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
.palette.color-light{
  background-color: var(--color-light);
}
.palette.color-dark{
  background-color: var(--color-dark);
}
.palette.color-a{
  background-color: var(--color-a);
}
.palette.color-b{
  background-color: var(--color-b);
}
.palette.color-c{
  background-color: var(--color-c);
}

.palette.color-light:hover{
  background-color: var(--color-light-hover);
}
.palette.color-dark:hover{
  background-color: var(--color-dark-hover);
}
.palette.color-a:hover{
  background-color: var(--color-a-hover);
}
.palette.color-b:hover{
  background-color: var(--color-b-hover);
}
.palette.color-c:hover{
  background-color: var(--color-c-hover);
}


</style>
