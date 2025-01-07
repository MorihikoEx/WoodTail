<script setup lang="ts">

</script>

<template>
  <footer>
    <div>
      <div id="footer-a">

        <a href="https://x.com/morihikoex" target="_blank">
          <img src="/public/svg/twitter-x.svg" class="bottom-icon twitter" alt="morihiko" />
        </a>
        <a href="https://github.com/MorihikoEx/WoodTail" target="_blank" class="mx-5">
          <img src="/public/svg/github.svg" class="bottom-icon github" alt="morihiko" />
        </a>
        <a href="https://space.bilibili.com/1771919164?spm_id_from=333.1007.0.0" target="_blank" >
          <img src="/public/svg/bilibili.svg" class="bottom-icon bilibili" alt="赤屿不知道" />
        </a>

      </div>
      <p> © 2025 morihiko. </p>


    </div>


  </footer>
</template>

<style scoped>
.twittericon{
  width: 200px;
  height: 200px;
  background-image: url("/public/svg/twitter-x.svg");
  background-repeat: no-repeat;
  background-size: contain;
  color: white;
}

.bottom-icon {
    height: 1.5rem; /* 等高设置 */
    margin: 0.5rem; /* 外边距 */
    width: auto;
    position: relative;
    fill: white;

}

.bottom-icon.twitter {
    height: 1.1rem;
}
.bottom-icon.bilibili {
  height: 1.4rem;

}
.mx-5 {
  margin-right: 3rem;
  margin-left: 3.2rem;
}

#footer-a{
  flex: 1;
  display: flex;
  justify-content: center; /* 水平居中对齐 */
  align-items: center; /* 垂直居中对齐 */
}


</style>

