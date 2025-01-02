<script lang="ts" setup>
import {ref} from 'vue'
import Person from "./Person.vue";

defineProps<{ msg: string }>()

const count = ref(0)
let intervalId:number|undefined = undefined
const startIncrement = () => {
  intervalId = setInterval(() => {
    count.value++
  }, 100) // 每 100 毫秒自增一次
}
const stopIncrement = () => {
  clearInterval(intervalId as number|undefined)
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <h2>组件测试</h2>
    <h3>试试下面的赛博木鱼, 也可以试试<a href="https://thebook.常之书.site " target="_blank" >偷渡去常之书</a></h3>
    <button type="button" class="skin_a" @click="count++" @mousedown="startIncrement" @mouseup="stopIncrement">功德+{{ count }}</button>
  </div>
      <div class="id">
        <div class="card">
          <h2>来自堡垒的身份id卡</h2>
          <Person />
        </div>
      </div>



</template>

<style scoped>
button{
  transition: background-color 2s;
}
.skin_a:hover {
  background-color: #32de8a;
}
.id {
  border: #32de8a 2px solid;
  border-radius: 8px;
}

</style>
