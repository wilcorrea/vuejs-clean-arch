import app from 'app/main'

import AppForm from 'presentation/components/Container/AppForm.vue'
import AppText from 'presentation/components/Input/AppText.vue'
import AppCheckbox from 'presentation/components/Input/AppCheckbox.vue'
import AppTextarea from 'presentation/components/Input/AppTextarea.vue'
import AppButton from 'presentation/components/Button/AppButton.vue'

let done = false
if (!done) {
  app.component('AppForm', AppForm)
  app.component('AppText', AppText)
  app.component('AppCheckbox', AppCheckbox)
  app.component('AppTextarea', AppTextarea)
  app.component('AppButton', AppButton)

  done = true
}
