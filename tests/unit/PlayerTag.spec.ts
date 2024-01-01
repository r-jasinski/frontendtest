import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Player from '../../src/components/PlayerTag.vue'

describe('Player.vue', () => {
  const wrapper = mount(Player, {
    propsData: {
      flag: 'https://i.imgur.com/flag.png',
      image: 'https://i.imgur.com/image.png',
      isPlayerTurn: true,
      name: 'Guest9241962816',
      time: '4:58'
    }
  })
  it('should render image', () => {
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://i.imgur.com/image.png'
    )
  })
  it('should render name', () => {
    expect(wrapper.find('span').text()).toBe('Guest9241962816')
  })
  it('should render flag', () => {
    expect(wrapper.find('.user-tagline img').attributes('src')).toBe(
      'https://i.imgur.com/flag.png'
    )
  })
  it('should render network status', () => {
    expect(wrapper.findAll('li')).toHaveLength(4)
  })
  it('should render time', () => {
    expect(wrapper.find('.clock').text()).toBe('4:58')
  })
  it('should have isPlayerTurn property set to true', () => {
    expect(wrapper.props('isPlayerTurn')).toBe(true)
  })
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
