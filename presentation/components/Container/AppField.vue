<template>
  <!--  eslint-disable-next-line vue/no-deprecated-dollar-listeners-api-->
  <component
    :is="is"
    v-bind="{ ...$attrs, ...$props }"
  />
</template>

<script lang="js">
export default {
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
   */
  computed: {
    /**
     * @return {string}
     */
    is () {
      const components = {
        text: 'AppText',
        checkbox: 'AppCheckbox',
        textarea: 'AppTextarea'
      }
      return components[this.as] ?? components.text
    }
  }
}
</script>

<style scoped>

</style>
