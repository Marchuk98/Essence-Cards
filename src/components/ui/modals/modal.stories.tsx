import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './'
import { Button } from '../button'
import { TextField } from '../text-field'
import { Typography } from '../typography'
import { Checkbox } from '../checkbox'
import { Select } from '../select'
import { ChangeCover } from '../../../assets/icons'

const meta = {
  title: 'Components/Modal',
  component: Modal.Root,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    trigger: <Button variant={'primary'}>Modal</Button>,
  },
} satisfies Meta<typeof Modal.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Title',
    children: (
      <>
        <Modal.Body>
          <TextField type={'text'} title={'test'} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle_2'}>Add New Pack</Typography>
          </Button>
          <Button variant={'secondary'}>
            <Typography variant={'subtitle_2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </>
    ),
  },
}

export const Header: Story = {
  args: {
    title: 'Header',
  },
}

export const Content: Story = {
  args: {
    children: (
      <Modal.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniamdsa
      </Modal.Body>
    ),
  },
}
export const Content_first: Story = {
  args: {
    children: (
      <Modal.Body>
        <Select fullWidth items={['item1', 'item2', 'item3', 'item4']} />
        <TextField title={'input'} type={'text'} />
        <TextField title={'input'} type={'password'} />
        <Checkbox label={'Check-box'} />
      </Modal.Body>
    ),
  },
}
export const Content_second: Story = {
  args: {
    title: 'Header',
    children: (
      <Modal.Body>
        <Select label={'select-box'} fullWidth items={['item1', 'item2', 'item3', 'item4']} />
        <Typography variant={'subtitle_2'}>Question:</Typography>
        <Button variant={'secondary'}>
          <ChangeCover />
          <>Change cover</>
        </Button>
        <Typography variant={'subtitle_2'}>Answer:</Typography>
        <Button variant={'secondary'}>
          <ChangeCover />
          <>Change cover</>
        </Button>
        <TextField title={'input'} type={'text'} />
        <Checkbox label={'Check-box'} />
      </Modal.Body>
    ),
  },
}

export const Footer: Story = {
  args: {
    children: (
      <Modal.Footer>
        <Button variant={'primary'}>Primary</Button>
        <Button variant={'secondary'}>Cancel</Button>
      </Modal.Footer>
    ),
  },
}
