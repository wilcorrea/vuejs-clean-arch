<template>
  <div :class="classNames">
    <div class="field">
      <label :for="id">{{ label }}</label>
      <div class="component">
        <textarea
          class="textarea"
          :class="{ 'is-danger': errors.length }"
          :id="id"
          :name="name"
          :value="modelValue"
          :rows="rows"
          v-bind="{ ...$attrs, ...$props }"
          @input="update"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { UserEvent } from 'app/definitions'

import { classNames, id } from './helper'

export default defineComponent({
  name: 'AppTextarea',
  emits: {
    'update:modelValue': null,
    'update:errors': null
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
    },
    rows: {
      type: [String, Number],
      default: '5'
    }
  },
  setup (props, { emit }) {
    return {
      id: id(),
      classNames: computed(() => classNames(props)),
      update: ($event: UserEvent<HTMLInputElement>) => {
        emit('update:modelValue', $event.target.value)
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

textarea {
  resize: vertical;
}
</style>
