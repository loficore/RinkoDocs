<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slogans = [
  '简洁而强大',
  '开箱即用',
  '高度可定制',
  '现代化设计'
]
const currentSlogan = ref(slogans[0])
const sloganIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    sloganIndex.value = (sloganIndex.value + 1) % slogans.length
    currentSlogan.value = slogans[sloganIndex.value]
  }, 3000)
})
</script>

<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1 class="hero-title">RinkoDocs</h1>
        <p class="hero-slogan">
          <span class="slogan-text">{{ currentSlogan }}</span>
          <span class="cursor">|</span>
        </p>
        <div class="hero-actions">
          <a href="/RinkoDocs/api-guide/quick-api-intro" class="btn btn-primary">开始使用</a>
          <a href="/RinkoDocs/api-guide/api-guide" class="btn btn-secondary">API 文档</a>
        </div>
      </div>
      <div class="scroll-hint">
        <span>向下滚动</span>
        <div class="arrow"></div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2 class="section-title">关于项目</h2>
        <p class="section-desc">
          RinkoAI 是一个强大的 AI 助手框架，提供灵活的 API 调用和分组管理机制。
          旨在帮助开发者快速构建 AI 应用。
        </p>
        
        <div class="features-grid">
          <a href="/RinkoDocs/api-guide/quick-api-intro" class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>快速开始</h3>
            <p>了解如何快速上手 RinkoAI，开始你的 AI 之旅</p>
          </a>
          <a href="/RinkoDocs/api-guide/api-guide" class="feature-card">
            <div class="feature-icon">🔌</div>
            <h3>API 调用</h3>
            <p>完整的 API 调用指南和示例，满足各种需求</p>
          </a>
          <a href="/RinkoDocs/group" class="feature-card">
            <div class="feature-icon">📂</div>
            <h3>分组机制</h3>
            <p>了解 RinkoAI 的分组机制，高效管理你的 AI 助手</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
}

.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px;
  z-index: 100;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero-content {
  position: relative;
  text-align: center;
  color: #fff;
  padding: 2rem;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 700;
  margin: 0;
  display: block;
  line-height: 1.2;
  margin-bottom: 3rem;
  background: linear-gradient(215deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease-out;
}

.hero-slogan {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin: 0;
  padding: 0.5rem 0;
  display: block;
  line-height: 1.5;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.slogan-text {
  opacity: 0.9;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #425AEF;
  color: #fff;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(66, 90, 239, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-secondary:hover {
  background: #fff;
  color: #425AEF;
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  opacity: 0.7;
  animation: bounce 2s infinite;
}

.arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-section {
  padding: 5rem 2rem;
  background: var(--vp-c-bg);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.section-desc {
  text-align: center;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
}

.feature-card:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin: 0 0 0.5rem;
  color: var(--vp-c-text-1);
}

.feature-card p {
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 250px;
  }
}
</style>
