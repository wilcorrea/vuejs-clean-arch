<template>
  <div class="CategoryForm container is-max-desktop">
    <AppForm @submit.prevent="addCategory">
      <AppText
        name="name"
        v-model="datum.name"
        v-bind="schema.name.attrs"
        :error="schema.description.error"
      />
      <AppCheckbox
        name="active"
        v-model="datum.active"
        v-bind="schema.active.attrs"
        :error="schema.active.error"
      />
      <AppTextarea
        name="description"
        v-model="datum.description"
        v-bind="schema.description.attrs"
        :error="schema.description.error"
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
import { reactive, defineComponent } from 'vue'
import { resolve } from 'app/container'
import { ErrorInfo, Schema } from 'app/definitions'

import AppForm from 'presentation/components/Container/AppForm.vue'
import AppText from 'presentation/components/Input/AppText.vue'
import AppCheckbox from 'presentation/components/Input/AppCheckbox.vue'
import AppTextarea from 'presentation/components/Input/AppTextarea.vue'
import AppButton from 'presentation/components/Button/AppButton.vue'

import AddCategory from 'src/General/Category/UseCases/AddCategory'
import { schemata } from 'src/General/Category/Schema/Category'

export default defineComponent({
  name: 'CategoryForm',
  components: {
    AppForm,
    AppText,
    AppCheckbox,
    AppTextarea,
    AppButton
  },
  setup () {
    const datum = reactive({
      name: '',
      active: true,
      description: ''
    })

    const schema: Record<string, Schema> = reactive(schemata())

    const addCategory = async function () {
      const useCase = await resolve('AddCategory') as AddCategory
      let errors: ErrorInfo[] = []
      try {
        useCase.handle(datum)
        window.alert('Show')
      } catch (e) {
        if (Array.isArray(e.errors)) {
          errors = e.errors
        }
      }
      for (const detail of errors) {
        schema[detail.field].errors = detail.errors
      }
    }

    return {
      datum,
      schema,
      addCategory
    }
  }
})
</script>
