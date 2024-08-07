// tests/unit/views/About.spec.js
import { shallowMount } from '@vue/test-utils'
import About from '@/views/AboutView.vue'

describe('AboutView.vue', () => {
  it('renders About page', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.text()).toMatch('This is an about page')
    //Aserción
    expect(wrapper.html()).toMatchSnapshot()
  })
})