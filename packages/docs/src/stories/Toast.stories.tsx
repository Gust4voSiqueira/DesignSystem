import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'Agendamento realizado',
    date: new Date(),
  },
  argTypes: {
    date: {
      type: Date,
    },
  },
} as Meta

export const Primary: StoryObj<ToastProps> = {}
