<template>
  <div :class="classNames">
    <div class="field">
      <label :for="id">{{ label }}</label>
      <div class="component">
        <input
          class="input"
          :class="{ 'is-danger': errors.length }"
          :id="id"
          :name="name"
          type="text"
          :value="modelValue"
          @input="update"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { UserEvent } from 'app/env'
import { classNames, id } from './helper'

export default defineComponent({
  name: 'AppText',
  emits: {
    'update:modelValue': null
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    errors: {
      type: [Array],
      default: () => []
    }
  },
  setup (props, { emit }) {
    return {
      id: id(),
      classNames: computed(() => classNames(props)),
      update: ($event: UserEvent<HTMLInputElement>) => emit('update:modelValue', $event.target.value)
    }
  }
})
</script>

<style
  scoped
  lang="scss"
>
label {
  cursor: pointer;
}
input {
  box-sizing: border-box;
}
</style>
