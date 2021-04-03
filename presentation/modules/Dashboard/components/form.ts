import { register } from 'app/ui/component'

import AppForm from 'presentation/modules/Dashboard/components/Container/AppForm.vue'
import AppField from 'presentation/modules/Dashboard/components/Container/AppField.vue'

import AppText from 'presentation/modules/Dashboard/components/Input/AppText.vue'
import AppCheckbox from 'presentation/modules/Dashboard/components/Input/AppCheckbox.vue'
import AppTextarea from 'presentation/modules/Dashboard/components/Input/AppTextarea.vue'
import AppButton from 'presentation/modules/Dashboard/components/Button/AppButton.vue'

register('AppForm', AppForm)
register('AppField', AppField)

register('AppText', AppText)
register('AppCheckbox', AppCheckbox)
register('AppTextarea', AppTextarea)

register('AppButton', AppButton)
