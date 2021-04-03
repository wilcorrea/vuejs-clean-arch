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
            v-bind="{ ...$attrs, ...$props }"
            @input="update"
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { UserEvent } from 'app/definitions'

import { id, classNames } from './helper'

export default defineComponent({
  name: 'AppCheckbox',
  emits: {
    'update:modelValue': null,
    'update:errors': null
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
      update: ($event: UserEvent<HTMLInputElement>) => {
        emit('update:modelValue', $event.target.checked)
        emit('update:errors', undefined)
      }
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
