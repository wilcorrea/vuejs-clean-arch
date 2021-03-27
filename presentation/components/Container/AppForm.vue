<template>
  <form class="grid gap-col-5 gap-row-10">
    <slot />
    <div class="cell">
      <div class="buttons padding is-relative">
        <slot name="buttons" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AppForm'
}
</script>

<style scoped>

</style>
