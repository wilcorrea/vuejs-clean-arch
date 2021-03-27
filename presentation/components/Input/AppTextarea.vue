<template>
  <div :class="classNames">
    <div class="field">
      <label :for="id">{{ label }}</label>
      <div class="component">
        <textarea
          class="textarea"
          :id="id"
          :name="name"
          :value="modelValue"
          :rows="rows"
          @input="update"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { classNames, id } from './helper'
import { UserEvent } from '../../../app/env'

export default defineComponent({
  name: 'AppTextarea',
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
    rows: {
      type: [String, Number],
      default: '5'
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

textarea {
  resize: vertical;
}
</style>
