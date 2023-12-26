import '../style.css'
import SideBar from '../components/SideBar.vue'
import type { Meta } from '@storybook/vue3'

const meta = {
  title: 'SideBar',
  component: SideBar,
  tags: ['autodocs']
} satisfies Meta<typeof SideBar>

export default meta
export const Default = {
  args: {
    notations: [{ notation: 'd4' }, { notation: 'c5' }]
  }
}
