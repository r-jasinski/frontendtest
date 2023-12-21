import '../style.css'
import Sidebar from '../components/Sidebar.vue'
import type { Meta } from '@storybook/vue3'

const meta = {
  title: 'Sidebar',
  component: Sidebar,
  tags: ['autodocs']
} satisfies Meta<typeof Sidebar>

export default meta
export const Default = {
  args: {
    notations: [{ notation: 'd4' }, { notation: 'c5' }]
  }
}
