import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TheDie from '@/components/TheDie.vue'

describe('TheDie.vue', () => {
  it('renders a die face', () => {
    const faces = ['aRandomDieFace']
    const wrapper = shallowMount(TheDie, {
      propsData: { faces }
    })
    expect(wrapper.text()).to.include('aRandomDieFace')
  })
})
