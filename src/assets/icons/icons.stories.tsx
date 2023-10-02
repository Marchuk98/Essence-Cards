import { StoryObj } from '@storybook/react'

import {
  ChevronDown,
  Trash,
  Edit,
  Play,
  Eye,
  Person,
  EyeOff,
  ArrowLeftIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  ChangeCover,
  Close,
  CheckMark,
  MailIcon,
  More,
  Logout,
  Page404,
  StarIcon,
  StarOutlineIcon,
  Search,
  LogoCardProject,
} from './'

const meta = {
  title: 'Icons/Icons',
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const LogoCardProject_Icon: Story = {
  render: () => {
    return <LogoCardProject />
  },
}
export const Chevron_Down: Story = {
  render: () => {
    return <ChevronDown />
  },
}

export const Trash_Icon: Story = {
  render: () => {
    return <Trash />
  },
}

export const Edit_Icon: Story = {
  render: () => {
    return <Edit />
  },
}

export const Eye_Icon: Story = {
  render: () => {
    return <Eye />
  },
}

export const Person_Icon: Story = {
  render: () => {
    return <Person />
  },
}

export const EyeOff_Icon: Story = {
  render: () => {
    return <EyeOff />
  },
}

export const ArrowLeftIcon_Icon: Story = {
  render: () => {
    return <ArrowLeftIcon />
  },
}
export const KeyboardArrowLeft_Icon: Story = {
  render: () => {
    return <KeyboardArrowLeft color={'#fff'} />
  },
}
export const KeyboardArrowRight_Icon: Story = {
  render: () => {
    return <KeyboardArrowRight color={'#fff'} />
  },
}
export const ChangeCover_Icon: Story = {
  render: () => {
    return <ChangeCover />
  },
}
export const Close_Icon: Story = {
  render: () => {
    return <Close />
  },
}
export const CheckMark_Icon: Story = {
  render: () => {
    return <CheckMark />
  },
}
export const MailIcon_Icon: Story = {
  render: () => {
    return <MailIcon />
  },
}

export const More_Icon: Story = {
  render: () => {
    return <More />
  },
}

export const Logout_Icon: Story = {
  render: () => {
    return <Logout />
  },
}

export const Page404_Icon: Story = {
  render: () => {
    return <Page404 />
  },
}

export const StarIcon_Icon: Story = {
  render: () => {
    return <StarIcon />
  },
}

export const StarOutlineIcon_Icon: Story = {
  render: () => {
    return <StarOutlineIcon />
  },
}

export const Play_Icon: Story = {
  render: () => {
    return <Play />
  },
}

export const Search_Icon: Story = {
  render: () => {
    return <Search />
  },
}
