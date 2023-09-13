import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    isAvailable: true,
    date: new Date(),
  },
  argTypes: {
    date: {
      type: Date,
    },
  },
} as Meta

export const AvailableDay: StoryObj<TooltipProps> = {}

export const UnavailableDay: StoryObj<TooltipProps> = {
  args: {
    isAvailable: false,
  },
}
