<script setup lang="ts">
import { ref } from 'vue';

let name = ref('312');
let age = ref(18);
let tel = ref('13812345678');

let _name = ref(true);
let _tel = ref(true);

function changename() {
  if(_name.value){
    name.value = '苍离';
  }else{
    name.value = '312';
  }
  _name.value = !_name.value;

}
function changeage() {
  age.value += 1;
}
function changetel() {
  if(_tel.value){
    tel.value = '114514';
  }else{
    tel.value = '13812345678';
  }
  _tel.value = !_tel.value;

}

</script>

<template>
  <div class="Person">
    <h3>身份id：{{ name }} &nbsp;&nbsp;年龄：({{ age }})</h3>
    <p>联系方式: {{ tel }}</p>

    <button @click="changename" class="my-button">切换真名</button>
    <button @click="changeage" class="my-button">臭狗给我变老</button>
    <button @click="changetel" class="my-button">好臭的联系方式</button>



  </div>
</template>

<style scoped>
.my-button {
  margin: 5px; /* 增加按钮之间的间距 */
}
</style>
