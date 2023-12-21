import '../style.css'
import Board from '../components/Board.vue'
import type { Meta } from '@storybook/vue3'

const meta = {
  title: 'Board',
  component: Board,
  tags: ['autodocs']
} satisfies Meta<typeof Board>

export default meta
export const Default = {}
