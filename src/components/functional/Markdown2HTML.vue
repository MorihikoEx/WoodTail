<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { marked } from 'marked';

  const markdown=ref<string>('markdownContent');
  const convertedMarkdown=ref<string>('');

  // 每当 markdown 发生变化时，Watcher 都会将 markdown 转换为 HTML
  watch(markdown, (newMarkdown) => {
    convertedMarkdown.value = marked(newMarkdown) as string;
  });

</script>

<template>
 <!-- 模板将转换后的 markdown 显示为 HTML -->
  <div class="markdown" v-html="convertedMarkdown"></div>
</template>

<style scoped>

</style>

