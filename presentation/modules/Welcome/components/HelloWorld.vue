<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <HelloLink
        href="https://cli.vuejs.org"
        no-margin
      >
        vue-cli documentation
      </HelloLink>
      .
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <HelloLink
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
        label="babel"
        margin
      />

      <HelloLink
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
        label="pwa"
        margin
      />

      <HelloLink
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
        label="router"
        margin
      />

      <HelloLink
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
        label="vuex"
        margin
      />

      <HelloLink
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
        label="eslint"
        margin
      />

      <HelloLink
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
        label="unit-jest"
        margin
      />

      <HelloLink
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress"
        label="e2e-cypress"
        margin
      />

      <HelloLink
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
        label="typescript"
        margin
      />
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <HelloLink
        href="https://vuejs.org"
        label="Core Docs"
      />

      <HelloLink
        href="https://forum.vuejs.org"
        label="Forum"
      />

      <HelloLink
        href="https://chat.vuejs.org"
        label="Community Chat"
      />

      <HelloLink
        href="https://twitter.com/vuejs"
        label="Twitter"
      />

      <HelloLink
        href="https://news.vuejs.org"
        label="News"
      />
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <HelloLink
        href="https://router.vuejs.org"
        label="vue-router"
      />

      <HelloLink
        href="https://vuex.vuejs.org"
        label="vuex"
      />

      <HelloLink
        href="https://github.com/vuejs/vue-devtools#vue-devtools"
        label="vue-devtools"
      />

      <HelloLink
        href="https://vue-loader.vuejs.org"
        label="vue-loader"
      />

      <HelloLink
        href="https://github.com/vuejs/awesome-vue"
        label="awesome-vue"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import HelloLink from './HelloLink.vue'

@Options({
  name: 'HelloWorld',
  components: { HelloLink },
  props: {
    message: {
      type: String,
      default: ''
    }
  }
})
export default class HelloWorld extends Vue {
  private message!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style
  scoped
  lang="scss"
>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
