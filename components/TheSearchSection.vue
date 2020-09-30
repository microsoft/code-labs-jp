<template>
  <div class="search">
    <div class="category-bar">
      <div class="categories">
        <button
          v-for="category in categories"
          :key="category"
          class="category"
          :class="{ selected: selectedCategories.includes(category) }"
          @click="onCategoryClick(category)"
        >
          {{ toCategoryLabel(category) }}
        </button>
      </div>
    </div>
    <div class="selects">
      <item-select
        class="select"
        :items="products.map((p) => ({ key: p.id, name: p.name }))"
        placeholder="プロダクトから探す"
        @change="onProductsChange"
      />
      <item-select
        class="select"
        :items="languages.map((l) => ({ key: l.id, name: l.name }))"
        placeholder="言語から探す"
        @change="onLanguagesChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { categories, Category, toCategoryLabel } from '@/data/category'
import { products } from '@/data/product'
import { languages } from '@/data/language'

export type Condition = {
  categories: Category[]
  products: string[]
  languages: string[]
}

export default Vue.extend({
  data() {
    return {
      categories,
      products,
      languages,
      selectedProductIds: [] as string[],
      selectedLanguageIds: [] as string[],
      selectedCategories: [...categories],
    }
  },
  methods: {
    toCategoryLabel(value: Category): string {
      return toCategoryLabel(value)
    },
    onCategoryClick(category: Category) {
      const selected = this.selectedCategories.includes(category)
      const updated = selected
        ? this.selectedCategories.filter((c) => c !== category)
        : [...this.selectedCategories, category]
      this.selectedCategories = updated
      this.emit()
    },
    onProductsChange(productIds: string[]) {
      this.selectedProductIds = productIds
      this.emit()
    },
    onLanguagesChange(languageIds: string[]) {
      this.selectedLanguageIds = languageIds
      this.emit()
    },
    emit() {
      const condition: Condition = {
        categories: this.selectedCategories,
        products: this.selectedProductIds,
        languages: this.selectedLanguageIds,
      }
      this.$emit('change', condition)
    },
  },
})
</script>

<style scoped>
.category-bar {
  text-align: center;
}

.categories {
  display: inline-flex;
  background: linear-gradient(
      to left top,
      rgb(0 196 228 / 0.2),
      rgb(67 22 140 / 0.3)
    ),
    linear-gradient(to left, #0e4282, var(--color-primary), #00c4e4);
  border-radius: 2px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.category {
  color: #fff;
  font-size: 1rem;
  padding: 1rem 1.25rem 1rem 3rem;
  font-weight: 700;
  position: relative;
  transition: background-color 0.2s;
}

.category:not(.selected) {
  background-color: #232d42;
}

.category:before,
.category:after {
  position: absolute;
  content: '';
}

.category:before {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 2px;
  border: 2px solid #fff;
  left: 1.1rem;
  top: 50%;
  transform: translateY(-50%);
  transition: border-color 0.2s;
}

.category:after {
  width: 0.5rem;
  height: 0.75rem;
  border-right: 4px solid #fff;
  border-bottom: 4px solid #fff;
  transform: rotate(45deg) translateY(-50%);
  left: 1.225rem;
  top: calc(50% - 0.175rem);
  opacity: 0;
  transition: opacity 0.2s, border-color 0.2s;
}

.category.selected:after {
  opacity: 1;
}

.selects {
  display: flex;
  margin: 2rem auto 1rem;
  width: 70vw;
  max-width: 50rem;
}

.select {
  width: 50%;
  padding: 0.5rem;
}

@media (min-width: 768px) {
  .category + .category {
    border-left: 1px solid rgb(32, 63, 86);
  }
}

@media (max-width: 767px) {
  .categories {
    width: 85vw;
    flex-wrap: wrap;
  }

  .category {
    text-align: left;
    width: 50%;
    border-top: 1px solid rgb(32, 63, 86);
  }

  .category:nth-of-type(even) {
    border-left: 1px solid rgb(32, 63, 86);
  }

  .category:last-of-type {
    width: 100%;
  }

  .selects {
    width: 90vw;
    flex-direction: column;
    margin: 2rem auto 0;
  }

  .select {
    width: 100%;
  }

  .select + .select {
    margin-top: 0.5rem;
  }
}

@media (hover: hover) {
  .category:hover:before,
  .category:hover:after {
    border-color: var(--color-primary-light);
  }
}
</style>
