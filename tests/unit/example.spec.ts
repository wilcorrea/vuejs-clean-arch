import { shallowMount } from '@vue/test-utils'
import HelloWorld from 'resources/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.message when passed', () => {
    const message = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })
})
