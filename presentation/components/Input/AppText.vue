<template>
  <div :class="classNames">
    <div class="field">
      <label :for="id">{{ label }}</label>
      <div class="component">
        <input
          class="input"
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
import { defineComponent } from 'vue'
import { UserEvent } from 'app/definitions'
import { id, classNames } from './helper'

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
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    return {
      id: id(),
      classNames: classNames(props),
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
