<script setup lang="ts">
import {ref} from 'vue'
const count = ref(0)
</script>


<template>
  <div class="flex-y box">
    <h2>现在这里还没有开放</h2>
    <p>不过你可以敲敲下面的赛博木鱼, 或者偷渡去看<a href="https://thebook.常之书.site " target="_blank" >常之书</a></p>
    <button type="button" class="skin_a" @click="count++">功德+{{ count }}</button>
  </div>
</template>


<style scoped>

</style>
