import app from 'app/main'

import AppForm from 'presentation/components/Container/AppForm.vue'
import AppField from 'presentation/components/Container/AppField.vue'

import AppText from 'presentation/components/Input/AppText.vue'
import AppCheckbox from 'presentation/components/Input/AppCheckbox.vue'
import AppTextarea from 'presentation/components/Input/AppTextarea.vue'
import AppButton from 'presentation/components/Button/AppButton.vue'

let registered = false
if (!registered) {
  app.component('AppForm', AppForm)
  app.component('AppField', AppField)

  app.component('AppText', AppText)
  app.component('AppCheckbox', AppCheckbox)
  app.component('AppTextarea', AppTextarea)
  app.component('AppButton', AppButton)

  registered = true
}
