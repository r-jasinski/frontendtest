import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Board from '../../src/components/ChessBoard.vue'

describe('Board.vue', () => {
  const wrapper = mount(Board)
  it('should render board squares', () => {
    expect(wrapper.findAll('.board span')).toHaveLength(64)
  })
  it('should render board rank legend', () => {
    const ranks = ['1', '2', '3', '4', '5', '6', '7', '8']
    ranks.forEach((rank) => {
      expect(wrapper.find(`[data-rank='${rank}']`).exists()).toBeTruthy()
    })
  })
  it('should render board file legend', () => {
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    files.forEach((file) => {
      expect(wrapper.find(`[data-file='${file}']`).exists()).toBeTruthy()
    })
  })
  it('emit event and value when squared is clicked', async () => {
    await wrapper.find("[data-file='a'][data-rank='1']").trigger('click')
    expect(wrapper.emitted('square-select')?.[0]?.[0]).toBe(8)
  })
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
