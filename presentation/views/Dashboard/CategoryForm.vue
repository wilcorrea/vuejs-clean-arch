<template>
  <div class="CategoryForm">
    <AppForm @submit.prevent="form.addCategory">
      <AppText
        name="name"
        width="50%"
        v-model="form.record.name"
        v-bind="form.attrs.name"
      />
      <AppCheckbox
        name="active"
        width="50%"
        v-model="form.record.active"
        v-bind="form.attrs.active"
      />
      <AppTextarea
        name="description"
        width="100%"
        v-model="form.record.description"
        v-bind="form.attrs.description"
      />

      <template #buttons>
        <hr light>
        <AppSubmit />
      </template>

      <div class="cell padding">
        <pre>{{ form.record }}</pre>
      </div>
    </AppForm>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { reactive } from 'vue'

import AppForm from 'presentation/components/Container/AppForm.vue'
import AppText from 'presentation/components/Input/AppText.vue'
import AppCheckbox from 'presentation/components/Input/AppCheckbox.vue'
import AppTextarea from 'presentation/components/Input/AppTextarea.vue'
import AppSubmit from 'presentation/components/Button/AppSubmit.vue'

@Options({
  name: 'CategoryForm',
  components: {
    AppForm,
    AppText,
    AppCheckbox,
    AppTextarea,
    AppSubmit
  }
})
/**
 * @class {CategoryForm}
 */
export default class CategoryForm extends Vue {
  form = setup(() => {
    const record = reactive({
      name: '',
      active: true,
      description: ''
    })
    const attrs = reactive({
      name: {
        label: 'Name'
      },
      active: {
        label: 'Active'
      },
      description: {
        label: 'Description'
      }
    })
    const addCategory = () => console.log('~> addCategory')
    return {
      record,
      attrs,
      addCategory
    }
  })
}
</script>

<style scoped>
.CategoryForm {
  margin: 100px auto;
  width: 1024px;
}
</style>
