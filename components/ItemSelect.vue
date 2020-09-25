<template>
  <div class="select">
    <button class="button" @click="menuShown = !menuShown">
      <span class="text">
        {{ selectedItemKeys.length ? selectedNames.join(', ') : placeholder }}
      </span>
      <fa icon="search" size="lg" area-hidden="true" />
    </button>
    <div v-if="menuShown" class="menu">
      <label
        v-for="item in items"
        :key="item.key"
        class="item"
        :class="{ selected: selectedItemKeys.includes(item.key) }"
      >
        <input
          type="checkbox"
          class="item__checkbox"
          @change="onChange($event, item.key)"
        />
        {{ item.name }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true,
    } as PropOptions<{ key: string; name: string }[]>,
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedItemKeys: [] as string[],
      menuShown: false,
    }
  },
  computed: {
    selectedNames(): string[] {
      return this.selectedItemKeys.map((key) => {
        const product = this.items.find((p) => p.key === key)
        return product ? product.name : ''
      })
    },
  },
  mounted() {
    document.addEventListener('click', this.onClickDocument)
  },
  destroyed() {
    document.removeEventListener('click', this.onClickDocument)
  },
  methods: {
    onChange(event: any, key: string) {
      const checked = event.target && event.target.checked
      const updated = checked
        ? [...new Set([...this.selectedItemKeys, key])]
        : this.selectedItemKeys.filter((k) => k !== key)
      this.selectedItemKeys = updated
      this.$emit('change', updated)
    },
    onClickDocument(event: MouseEvent) {
      if (!this.$el.contains(event.target as Node)) {
        this.menuShown = false
      }
    },
  },
})
</script>

<style scoped>
.select {
  position: relative;
  display: inline-block;
  width: 24rem;
  max-width: 100%;
}

.button {
  margin: 0 auto;
  background-color: var(--color-secondary-dark);
  border-radius: 2rem;
  padding: 0 1.25rem 0 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: var(--color-primary-light);
  text-align: left;
  height: 3rem;
}

.text {
  white-space: nowrap;
  width: 19rem;
  color: #ddd;
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu {
  z-index: 10;
  position: absolute;
  top: calc(100% + 1rem);
  left: 0;
  right: 0;
  background-color: var(--color-secondary-dark);
  border-radius: 4px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5), 0 4px 10px rgba(0, 0, 0, 0.5);
  text-align: left;
  padding: 0.25rem 0;
  max-height: 24rem;
  overflow-y: scroll;
}

.item {
  display: block;
  padding: 0.75rem 1rem;
  color: #fff;
  cursor: pointer;
  padding-left: 3rem;
  position: relative;
}

.item + .item {
  border-top: 1px solid var(--color-secondary-light);
}

.item:before,
.item:after {
  position: absolute;
  content: '';
}

.item:before {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 2px;
  background-color: var(--color-secondary-light);
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.item.selected:after {
  width: 0.5rem;
  height: 0.75rem;
  border-right: 4px solid #00c4e4;
  border-bottom: 4px solid #00c4e4;
  transform: rotate(45deg) translateY(-50%);
  left: 1.125rem;
  top: calc(50% - 0.175rem);
}

.item__checkbox {
  display: none;
}

@media (max-width: 767px) {
  .button {
    width: 85vw;
  }
}
</style>
