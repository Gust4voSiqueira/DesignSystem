import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

const Trigger = styled(Tooltip.Trigger, {
  padding: '16px 26px 16px 26px',
  backgroundColor: '$gray800',
  border: 0,
  borderRadius: '$sm',

  color: '$white',
  fontSize: '$md',
  fontWeight: '$regular',
  fontFamily: 'Roboto',
})

export const TriggerAvaliable = styled(Trigger, {
  backgroundColor: '$gray800',
})

export const TriggerUnavailable = styled(Trigger, {
  backgroundColor: '$gray600',
})

export const Content = styled(Tooltip.Content, {
  fontFamily: 'Roboto',
  color: '$gray100',
  backgroundColor: '$gray900',
  fontWeight: '$medium',
  fontSize: '$sm',

  padding: '12px 16px 12px 16px',
  borderRadius: '$xss',

  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
