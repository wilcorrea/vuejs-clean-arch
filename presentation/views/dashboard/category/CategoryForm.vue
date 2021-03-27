<template>
  <div class="CategoryForm container is-max-desktop">
    <AppForm @submit.prevent="addCategory(datum)">
      <AppText
        name="name"
        v-model="datum.name"
        v-bind="schemata.name.attrs"
        v-on="schemata.name.listeners"
        :errors="schemata.name.errors"
      />
      <AppCheckbox
        name="active"
        v-model="datum.active"
        v-bind="schemata.active.attrs"
        v-on="schemata.active.listeners"
        :errors="schemata.active.errors"
      />
      <AppTextarea
        name="description"
        v-model="datum.description"
        v-bind="schemata.description.attrs"
        v-on="schemata.description.listeners"
        :errors="schemata.description.errors"
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
      <pre>{{ schemata }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import 'presentation/components/form'
import { createSchemata, createDatum } from 'src/General/Category/Schema/Category'
import { useAddCategory } from './controller'

export default defineComponent({
  name: 'CategoryForm',
  setup () {
    const datum = createDatum()
    const schemata = createSchemata(datum)

    const addCategory = useAddCategory(schemata)

    return {
      datum,
      schemata,
      addCategory
    }
  }
})
</script>
