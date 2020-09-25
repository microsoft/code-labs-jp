<template>
  <div class="container">
    <div class="header">
      <div class="hero">
        <div class="hero__content">
          <h1 class="title">Microsoft Japan<br />Code Labs</h1>
          <p class="description">
            日本マイクロソフトの各製品およびサービスのサンプル&nbsp;コードとハンズオン&nbsp;コンテンツ
          </p>
        </div>
      </div>
      <the-search-section @change="search" />
    </div>
    <div v-if="contents.length" class="contents">
      <a
        v-for="content in contents"
        :key="content.id"
        :href="content.url"
        target="_blank"
        class="content"
      >
        <div class="content__content">
          <div
            class="content__main"
            :style="{
              'justify-content': content.description
                ? 'space-between'
                : 'center',
            }"
          >
            <div class="content__title">
              {{ content.title }}
            </div>
            <div class="content__products">
              <span
                v-for="product in content.products"
                :key="product.id"
                class="content__product"
              >
                {{ product.name }}
              </span>
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-if="content.description"
              class="content__description"
              v-html="content.description"
            ></div>
            <!-- eslint-enable -->
            <div v-if="content.targets.length" class="content__targets">
              <fa
                class="content__targets__icon"
                :icon="['far', 'user']"
                area-hidden="true"
              />
              <span
                v-for="(target, targetIndex) in content.targets"
                :key="targetIndex"
                class="content__target"
              >
                {{ target }}
              </span>
            </div>
          </div>
          <div class="content__icon">
            <fa icon="external-link-alt" area-hidden="true" />
          </div>
        </div>
      </a>
    </div>
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
  background-image: url('~assets/images/header-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #111;
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
}

.hero__content,
.content__content {
  width: 90vw;
  max-width: 70rem;
  margin: 0 auto;
}

.title {
  font-size: 6rem;
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

.contents {
  margin: 0 auto;
}

.content {
  display: block;
  padding: 3rem 2rem;
  color: #fff;
}

.content + .content {
  border-top: 1px solid var(--color-secondary);
}

.content__content {
  display: flex;
  justify-content: space-between;
}

.content__title {
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--color-primary-light);
}

.content__products {
  margin: 0.75rem -0.25rem 0;
}

.content__product {
  background-color: var(--color-secondary-dark);
  color: #fff;
  margin: 0.25rem 0.1rem;
  height: 1.5rem;
  padding: 0 0.5rem;
  display: inline-flex;
  align-items: center;
  border-radius: 0.75rem;
  font-size: 0.8rem;
}

.content__description {
  margin-top: 1rem;
  line-height: 1.5;
  text-align: justify;
}

.content__targets {
  margin-top: 1.25rem;
  font-size: 0.8rem;
}

.content__targets__icon {
  margin-right: 0.25rem;
}

.content__target {
  margin-left: 0.25rem;
}

.content__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  color: var(--color-secondary-light);
}

.no-contents {
  margin: 3rem 1rem;
  text-align: center;
  color: var(--color-secondary-light);
}

@media (min-width: 768px) {
  .content:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

@media (max-width: 767px) {
  .hero__content {
    padding: 3rem 0.5rem 2rem;
    text-align: left;
  }

  .title {
    font-size: 3rem;
  }

  .description {
    font-size: 0.9rem;
  }

  .content {
    padding: 2rem 1rem;
  }

  .content__content {
    flex-direction: column;
  }

  .content__icon {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
