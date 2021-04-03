import { register } from 'app/ui/component'

import AppForm from 'presentation/components/Container/AppForm.vue'
import AppField from 'presentation/components/Container/AppField.vue'

import AppText from 'presentation/components/Input/AppText.vue'
import AppCheckbox from 'presentation/components/Input/AppCheckbox.vue'
import AppTextarea from 'presentation/components/Input/AppTextarea.vue'
import AppButton from 'presentation/components/Button/AppButton.vue'

register('AppForm', AppForm)
register('AppField', AppField)

register('AppText', AppText)
register('AppCheckbox', AppCheckbox)
register('AppTextarea', AppTextarea)

register('AppButton', AppButton)
