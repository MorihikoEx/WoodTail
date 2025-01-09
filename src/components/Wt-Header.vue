<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isNavVisible = ref(true);

const toggleNav = () => {
  isNavVisible.value = !isNavVisible.value;
};

onMounted(() => {
  const handleResize = () => {
    isNavVisible.value = window.innerWidth > 540;
  };

  window.addEventListener('resize', handleResize);
  handleResize();

  return () => {
    window.removeEventListener('resize', handleResize);
  };
});
</script>

<template>
  <header>
    <h1 @click="toggleNav" :class="{ 'centered': !isNavVisible }">&lt;<strong id="wt-header">WoodTail</strong>/&gt;</h1>
    <nav v-if="isNavVisible">
        <ul class="shadow-inset">
          <li><a href="#">苍离</a></li>
          <li><a href="#">凛墨</a></li>
          <li><a href="#">赤屿</a></li>
          <li><a href="#">汉灼银行</a></li>
        </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem;
  padding: 0 ;
  position: relative;
}
header ul{
  margin: 0rem;
  padding: 0 0.7rem;
  flex-wrap: nowrap;
}
header li {
  display: inline-block;
  margin: 0;
  padding: 0.7rem;
}
header li a {
  text-decoration: none;
  font-size: 1rem;
}

header h1 {
  transition: transform 0.3s ease-in-out;
  font-size: 1.4rem;
  margin: 1rem;
}
h1 strong {
  color: var(--color-c);
  cursor: pointer;
}
h1 strong:hover {
  color: var(--color-c-hover);
}

.centered {
  transform: translateX(calc(50vw - 85%));
}

@media (max-width: 540px) {
  header {
    flex-direction: column;
    align-items: center;
    margin:1.5rem 1rem;
  }
  header h1 {
    width: 100%;
    text-align: center;
    margin: 1.2rem 0;
  }
  nav {
    margin-top: 1rem;
    display: block;
    width: 100%;
    text-align: center;
  }
  .centered {
    transform: none;
  }
  nav ul {
    padding: 0;
    margin: 0;
  }
  nav li {
    display: block;
    padding: 0.7rem 0;
    margin: 0 0;
  }
}
</style>
