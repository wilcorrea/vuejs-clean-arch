<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../../assets/logo.png"
    >

    <HelloWorld message="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from 'presentation/modules/Welcome/components/HelloWorld.vue'

@Options({
  name: 'Home',
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
