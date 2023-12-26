import '../style.css'
import PlayerTag from '../components/PlayerTag.vue'
import type { Meta } from '@storybook/vue3'

const meta = {
  title: 'PlayerTag',
  component: PlayerTag,
  tags: ['autodocs']
} satisfies Meta<typeof PlayerTag>

export default meta
export const Default = {
  args: {
    flag: 'https://r-jasinski.github.io/frontendtest/images/flag.png',
    image: 'https://www.chess.com/bundles/web/images/white_400.png',
    isPlayerTurn: true,
    name: 'Guest9241962816',
    time: '4:58'
  }
}
