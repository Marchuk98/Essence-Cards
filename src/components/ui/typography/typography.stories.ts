import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography.tsx'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body_1',
        'body_2',
        'subtitle_1',
        'subtitle_2',
        'caption',
        'overline',
        'link_1',
        'link_2',
        'error',
      ],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const H1: Story = {
  args: {
    as: 'h1',
    variant: 'h1',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    variant: 'h2',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const H3: Story = {
  args: {
    as: 'h3',
    variant: 'h3',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const Body_1: Story = {
  args: {
    variant: 'body_1',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const Body_2: Story = {
  args: {
    variant: 'body_2',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const Subtitle_1: Story = {
  args: {
    variant: 'subtitle_1',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const Subtitle_2: Story = {
  args: {
    variant: 'subtitle_2',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const Link_1: Story = {
  args: {
    as: 'a',
    variant: 'link_1',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const Link_2: Story = {
  args: {
    as: 'a',
    variant: 'link_2',
    children: 'Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'This is an error message',
    color: 'error',
  },
}
