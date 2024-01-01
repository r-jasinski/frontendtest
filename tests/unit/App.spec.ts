import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'
import Board from '../../src/components/ChessBoard.vue'

describe('App.vue', () => {
  const wrapper = mount(App)
  it('should render children components', () => {
    const board = wrapper.findComponent(Board)
    expect(board.exists()).toBe(true)
  })
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
