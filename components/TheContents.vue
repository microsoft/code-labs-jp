<template>
  <transition-group name="content-fade" class="contents" tag="div">
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
            'justify-content': content.description ? 'space-between' : 'center',
          }"
        >
          <div class="content__title">
            {{ content.title }}
          </div>
          <div class="content__tags">
            <span
              v-for="tag in tags(content)"
              :key="tag.id"
              class="content__tag"
            >
              {{ tag.name }}
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
  </transition-group>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Content } from '~/data/content'

export default Vue.extend({
  props: {
    contents: {
      type: Array,
      required: true,
    } as PropOptions<Content[]>,
  },
  methods: {
    tags(content: Content): { id: string; name: string }[] {
      return content.languages
        ? [...content.languages, ...content.products]
        : content.products
    },
  },
})
</script>

<style scoped>
.content {
  display: block;
  padding: 3rem 2rem;
  color: #fff;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out,
    background-color 0.3s;
}

.content + .content {
  border-top: 1px solid var(--color-secondary);
}

.content__content {
  display: flex;
  justify-content: space-between;
  width: 90vw;
  max-width: 70rem;
  margin: 0 auto;
}

.content__title {
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--color-primary-light);
}

.content__tags {
  margin: 0.75rem -0.25rem 0;
}

.content__tag {
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

.content-fade-move {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.content-fade-enter,
.content-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 767px) {
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

@media (hover: hover) {
  .content:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
