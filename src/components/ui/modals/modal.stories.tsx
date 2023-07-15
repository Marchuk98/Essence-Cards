import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './'
import { Button } from '../button'
import { TextField } from '../text-field'
import { Typography } from '../typography'
import { Select } from '../select'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'onCloseAction' },
    renderCancelButton: { control: 'Cancel Button' },
    renderActionButton: { control: 'Action Button' },
    showSeparator: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    showCloseButton: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    title: { control: 'string' },
    size: { control: 'modal size' },
    children: { control: 'components' },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const commonArgs = {
  children: (
    <Typography variant={'body_2'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
      consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium
      modi molestias odio quas rem voluptatum. Dolores?
    </Typography>
  ),
  open: true,
  title: 'Modals window',
}

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  render: args => {
    const [open, setOpen] = useState(false)

    const modalSwitchHandler = () => {
      setOpen(!open)
    }

    return (
      <div>
        <span>
          <Button onClick={modalSwitchHandler}>Open dialog</Button>
        </span>

        <Modal
          {...args}
          open={open}
          onClose={modalSwitchHandler}
          renderActionButton={() => <Button variant={'primary'}>Save</Button>}
          renderCancelButton={() => <Button variant={'secondary'}>Cancel</Button>}
        />
      </div>
    )
  },
}

export const DemoModalField: Story = {
  args: {
    ...commonArgs,
  },
  render: args => {
    const [open, setOpen] = useState(false)

    const modalSwitchHandler = () => {
      setOpen(!open)
    }

    return (
      <div>
        <span>
          <Button onClick={modalSwitchHandler}>Open dialog</Button>
        </span>

        <Modal {...args} open={open} onClose={modalSwitchHandler}>
          <TextField type={'text'} />
          <TextField type={'password'} />
          <TextField type={'search'} />
          <Select items={['1', '2', '3']} />
        </Modal>
      </div>
    )
  },
}

export const WithoutCloseButton: Story = {
  args: {
    ...commonArgs,
  },
  render: args => {
    const [open, setOpen] = useState(false)

    const modalSwitchHandler = () => {
      setOpen(!open)
    }

    return (
      <div>
        <span>
          <Button onClick={modalSwitchHandler}>Open dialog</Button>
        </span>

        <Modal {...args} open={open} onClose={modalSwitchHandler} showCloseButton={false} />
      </div>
    )
  },
}
