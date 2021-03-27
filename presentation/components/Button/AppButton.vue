<template>
  <input
    class="button"
    :class="classNames"
    :type="type"
    :value="label"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'primary'
    },
    link: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames (): string[] {
      if (this.link) {
        return ['is-text']
      }
      return [`is-${this.color}`]
    }
  }
})
</script>

<style scoped>

</style>
