import { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './'

const meta = {
  title: 'Components/tabSwitcher',
  component: TabSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const TabSwitcherDefault: Story = {
  args: {
    label: 'TabSwitcherLabel',
    tabs: [
      { value: 'tab1', title: 'Switcher', disabled: false },
      { value: 'tab2', title: 'Switcher', disabled: true },
      { value: 'tab3', title: 'Switcher', disabled: false },
    ],
    defaultValue: 'tab1',
    ariaLabel: 'TabSwitcher Aria Label',
  },
}
