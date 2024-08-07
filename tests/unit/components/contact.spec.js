// tests/unit/views/Contact.spec.js
import { shallowMount } from '@vue/test-utils'
import Contact from '@/views/ContactView.vue'

describe('ContactView.vue', () => {
  it('renders Contact page', () => {
    const wrapper = shallowMount(Contact)
    expect(wrapper.text()).toMatch('This is the Contact page.')
  })
})