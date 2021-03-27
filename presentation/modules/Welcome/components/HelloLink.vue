<template>
  <li :class="{ 'li--with-margin': !noMargin }">
    <a
      :href="href"
      :target="target"
      rel="noopener"
    >
      <slot>{{ label }}</slot>
    </a>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'HelloLink',
  props: {
    href: {
      type: String,
      required: true
    },
    target: {
      type: String,
      default: '_blank'
    },
    label: {
      type: String,
      default: ''
    },
    noMargin: {
      type: Boolean,
      default: false
    }
  }
})
export default class HelloLink extends Vue {
  /**
   * @private
   */
  private href!: string

  /**
   * @private
   */
  private target!: string

  /**
   * @private
   */
  private label!: string

  /**
   * @private
   */
  private noMargin!: boolean
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style
  scoped
  lang="scss"
>

li {
  display: inline-block;

  &.li--with-margin {
    margin: 0 10px;
  }
}

a {
  color: #42b983;
}
</style>
