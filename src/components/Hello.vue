<script lang="ts" setup>
import {ref} from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
let intervalId: ReturnType<typeof setInterval>
const startIncrement = () => {
  intervalId = setInterval(() => {
    count.value++
  }, 100)
  // 每 100 毫秒自增一次
}
const stopIncrement = () => {
  clearInterval(intervalId)
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <h2>组件测试</h2>
    <h3>敲敲这里的赛博木鱼, 或者偷渡去看<a href="https://thebook.常之书.site " target="_blank" >常之书</a></h3>
    <button type="button" class="skin_a" @click="count++" @touchstart="startIncrement" @mousedown="startIncrement" @touchend="stopIncrement" @mouseup="stopIncrement">功德+{{ count }}</button>
  </div>
</template>

<style scoped>
button{
  transition: background-color 2s;
}
.skin_a:active {
  background-color: #32de8a;
}

</style>
