import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SideBar from '../../src/components/SideBar.vue'

describe('SideBar.vue', () => {
  const wrapper = mount(SideBar, {
    propsData: {
      notations: [{ notation: 'a1', square: '8' }]
    }
  })
  it('should render notation', () => {
    expect(wrapper.find('li:nth-last-of-type(2) span').text()).toBe('a1')
  })
  it('should render icons', () => {
    expect(wrapper.findAll('svg')).toHaveLength(13)
  })
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
