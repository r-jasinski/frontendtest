import '../style.css'
import ChessBoard from '../components/ChessBoard.vue'
import type { Meta } from '@storybook/vue3'

const meta = {
  title: 'ChessBoard',
  component: ChessBoard,
  tags: ['autodocs']
} satisfies Meta<typeof ChessBoard>

export default meta
export const Default = {}
