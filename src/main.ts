import { createApp } from 'vue'
import App from './App.vue'

import './WoodTailMain.css'

// 检测系统主题
function detectSystemTheme(): 'light' | 'dark' {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// 更新页面主题
function updateTheme(theme: 'light' | 'dark') {
    const body = document.body;
    if (theme === 'dark') {
        body.setAttribute('data-bs-theme', 'dark');
        // 你可以在这里添加其他Dark主题的样式
    } else {
        body.setAttribute('data-bs-theme', 'light');
        // 你可以在这里添加其他Light主题的样式
    }
}

// 初始化主题
function initializeTheme() {
    const currentTheme = detectSystemTheme();
    updateTheme(currentTheme);
}

// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    updateTheme(newTheme);
});

// 页面加载时初始化主题
initializeTheme();


createApp(App).mount('#app')
