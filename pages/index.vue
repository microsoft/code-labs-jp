<template>
  <div class="container">
    <div class="header">
      <div class="header__bg"></div>
      <div class="header__content">
        <div class="hero">
          <div class="hero__content">
            <h1 class="title">Microsoft Japan<br />Code Labs</h1>
            <p class="description">
              日本マイクロソフトの各製品およびサービスのサンプル&nbsp;コードとハンズオン&nbsp;コンテンツ
            </p>
          </div>
        </div>
        <the-search-section class="search" @change="search" />
        <div class="count">
          <transition name="count-fade" mode="out-in">
            <span :key="contents.length">{{ contents.length }}</span>
          </transition>
          <span>&nbsp;件&nbsp;/&nbsp;{{ allContents.length }}&nbsp;件</span>
        </div>
      </div>
    </div>
    <the-contents
      v-if="contents.length"
      :contents="contents"
      class="contents"
    />
    <div v-else class="no-contents">
      条件に一致するコンテンツはありません
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contents } from '@/data/content'
import { Condition } from '@/components/TheSearchSection.vue'

export default Vue.extend({
  data() {
    return {
      contents,
      allContents: contents,
    }
  },
  methods: {
    search(condition: Condition) {
      this.contents = contents.filter(
        (content) =>
          condition.categories.includes(content.category) &&
          (!condition.products.length ||
            content.products.some((p) => condition.products.includes(p.id))) &&
          (!condition.languages.length ||
            content.languages?.some((l) => condition.languages.includes(l.id)))
      )
    },
  },
})
</script>

<style scoped>
.header {
  color: #fff;
  position: relative;
  background-color: #111;
}

.header__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.header__bg:before {
  content: '';
  opacity: 0;
  animation: fade-scale-up 0.75s 0.25s cubic-bezier(0.24, 0.76, 0.75, 1.03)
    forwards;
  background-image: url('~assets/images/header-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.header__content {
  padding: 0 0 3rem;
  position: relative;
  z-index: 1;
  opacity: 0;
  animation: fade-slide-up 0.3s 0.5s ease-out forwards;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero__content {
  margin: 0 auto;
  padding: 5rem 2rem 3rem;
  text-align: center;
  width: 90vw;
  max-width: 70rem;
}

.title {
  font-size: 7rem;
  font-weight: 500;
  line-height: 0.9;
  color: var(--color-primary-light);
  background: linear-gradient(
    to left bottom,
    var(--color-primary),
    var(--color-primary-light)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  line-height: 1.75;
  margin-top: 2rem;
  letter-spacing: 0.1em;
}

.count {
  margin: 1rem auto 0;
  width: 90vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
  font-size: 0.8rem;
  color: var(--color-secondary-light);
}

.no-contents {
  padding: 3rem 1rem;
  text-align: center;
  color: var(--color-secondary-light);
}

.count-fade-enter-active,
.count-fade-leave-active {
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}

.count-fade-enter {
  transform: translate3d(0, -0.25rem, 0);
  opacity: 0;
}

.count-fade-leave-to {
  transform: translate3d(0, 0.25rem, 0);
  opacity: 0;
}

.contents {
  opacity: 0;
  animation: fade-slide-up 0.3s 0.7s ease-out forwards;
}

@media (min-width: 768px) {
  .count {
    width: 70vw;
    max-width: 50rem;
  }
}

@media (max-width: 767px) {
  .hero__content {
    padding: 3rem 0.5rem 2rem;
    text-align: left;
  }

  .title {
    font-size: 3.75rem;
  }

  .description {
    font-size: 0.9rem;
  }
}

@keyframes fade-scale-up {
  0% {
    opacity: 0;
    transform: scale(1.1);
    filter: blur(20px);
  }
  100% {
    opacity: 1;
    transform: none;
    filter: none;
  }
}

@keyframes fade-slide-up {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
