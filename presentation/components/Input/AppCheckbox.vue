<template>
  <div :class="classNames">
    <div class="field">
      <label :for="id">{{ label }}</label>
      <div class="component">
        <label class="checkbox">
          <input
            :id="id"
            :name="name"
            type="checkbox"
            :value="modelValue"
            @input="update"
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { id, classNames } from './helper'
import { UserEvent } from '../../../app/env'

export default defineComponent({
  name: 'AppCheckbox',
  emits: {
    'update:modelValue': null
  },
  props: {
    modelValue: {
      type: [Boolean, Number],
      default: false
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
    }
  },
  setup (props, { emit }) {
    return {
      id: id(),
      classNames: computed(() => classNames(props)),
      update: ($event: UserEvent<HTMLInputElement>) => emit('update:modelValue', $event.target.checked)
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
</style>
