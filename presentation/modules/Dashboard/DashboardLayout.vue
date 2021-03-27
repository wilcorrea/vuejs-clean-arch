<template>
  <main>
    <section class="hero is-success">
      <div class="container is-max-desktop">
        <div class="hero-body">
          <p class="title">
            Success hero
          </p>
          <p class="subtitle">
            Success subtitle
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container is-max-desktop">
        <h1 class="title">
          Section
        </h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
        </h2>
      </div>
    </section>

    <RouterView />
  </main>
</template>

<script lang="ts">
export default {
  /**
   * Component name
   */
  name: 'DashboardLayout',
  /**
   * Component setup
   */
  setup (): Record<string, unknown> {
    return {}
  }
}
</script>

<style scoped>

</style>
