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
import { Options, Vue, setup } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Options({
  name: 'HelloLink'
})
export default class HelloLink extends Vue {
  @Prop({
    type: String,
    required: true
  })
  private href!: string

  @Prop({
    type: String,
    default: '_blank'
  })
  private target!: string

  @Prop({
    type: String,
    default: ''
  })
  private label!: string

  @Prop({
    type: Boolean,
    default: false
  })
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
