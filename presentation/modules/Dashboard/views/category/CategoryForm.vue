<template>
  <div class="CategoryForm container is-max-desktop">
    <AppForm @submit.prevent="addCategory(datum)">
      <AppField
        name="name"
        v-model="datum.name"
        v-model:errors="errors.name"
        v-bind="schemata.name.attrs"
        v-on="schemata.name.listeners"
      />
      <AppField
        name="active"
        v-model="datum.active"
        v-model:errors="errors.active"
        v-bind="schemata.active.attrs"
        v-on="schemata.active.listeners"
      />
      <AppField
        name="description"
        v-model="datum.description"
        v-model:errors="errors.description"
        v-bind="schemata.description.attrs"
        v-on="schemata.description.listeners"
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
      <pre>{{ errors }}</pre>
    </div>

    <div class="cell padding">
      <pre>{{ schemata }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import 'presentation/modules/Dashboard/components/form'
import { createSchemata, createDatum, createErrors } from 'source/Domains/General/Category/Schema/Category'
import { useAddCategory } from './controller'

export default defineComponent({
  name: 'CategoryForm',
  setup () {
    const errors = createErrors()
    const datum = createDatum()
    const schemata = createSchemata(datum)

    const addCategory = useAddCategory(schemata, errors)

    return {
      errors,
      datum,
      schemata,
      addCategory
    }
  }
})
</script>
