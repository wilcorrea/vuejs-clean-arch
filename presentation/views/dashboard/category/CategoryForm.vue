<template>
  <div class="CategoryForm container is-max-desktop">
    <AppForm @submit.prevent="addCategory(datum)">
      <AppText
        name="name"
        v-model="datum.name"
        v-bind="schema.name.attrs"
        v-on="schema.name.listeners"
        :errors="schema.name.errors"
      />
      <AppCheckbox
        name="active"
        v-model="datum.active"
        v-bind="schema.active.attrs"
        v-on="schema.active.listeners"
        :errors="schema.active.errors"
      />
      <AppTextarea
        name="description"
        v-model="datum.description"
        v-bind="schema.description.attrs"
        v-on="schema.description.listeners"
        :errors="schema.description.errors"
      />

      <template #buttons>
        <hr light>

        <AppButton
          type="submit"
          label="Save"
        />
        <AppButton
          label="Cancel"
          link
          @click="$router.push('/')"
        />
      </template>
    </AppForm>

    <div class="cell padding">
      <pre>{{ datum }}</pre>
    </div>

    <div class="cell padding">
      <pre>{{ schema }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Datum, Schema } from 'app/env'

import 'presentation/components/form'
import { schemata, data } from 'src/General/Category/Schema/Category'
import { useAddCategory } from './services'

export default defineComponent({
  name: 'CategoryForm',
  setup () {
    const datum: Datum = data()

    const schema: Record<string, Schema> = schemata(datum)

    const addCategory = useAddCategory(schema)

    return {
      datum,
      schema,
      addCategory
    }
  }
})
</script>
