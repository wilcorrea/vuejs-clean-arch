<template>
  <div>
    <h4>SignIn</h4>
    <button @click="$router.push('/dashboard')">
      Sign In
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  /**
   * Component name
   */
  name: 'SignIn'
})
</script>

<style scoped>

</style>
