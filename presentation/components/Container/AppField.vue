<template>
  <!--  eslint-disable-next-line vue/no-deprecated-dollar-listeners-api-->
  <component
    :is="is"
    v-bind="{ ...$attrs, ...$props }"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

/**
 */
export default defineComponent({
  /**
   */
  name: 'AppField',
  /**
   */
  props: {
    as: {
      type: String,
      default: 'text'
    }
  },
  /**
   * @param {Record<string,unknown>} props
   */
  setup (props) {
    const is = computed(() => {
      const components = {
        text: 'AppText',
        checkbox: 'AppCheckbox',
        textarea: 'AppTextarea'
      }
      return components[props.as] ?? components.text
    })
    return { is }
  }
})
</script>
