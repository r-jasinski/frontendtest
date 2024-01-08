import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('App.vue', () => {
  const wrapper = mount(App)
  it('should render children components', () => {
    const player = wrapper.findComponent({ name: 'PlayerTag' })
    expect(player.exists()).toBe(true)
    const board = wrapper.findComponent({ name: 'ChessBoard' })
    expect(board.exists()).toBe(true)
    const sidebar = wrapper.findComponent({ name: 'SideBar' })
    expect(sidebar.exists()).toBe(true)
  })
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
