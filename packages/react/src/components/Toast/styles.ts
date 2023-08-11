import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Root, {
  position: 'relative',
  backgroundColor: '$gray800',
  border: '1px solid $colors$gray600',
  borderRadius: '$sm',
  padding: '12px 20px',
  gap: '4px',

  width: '360px',
  height: '70px',

  display: 'grid',
  gridTemplateAreas: `'title action' 'description action'`,
  gridTemplateColumns: 'auto max-content',
  columnGap: '15px',
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: 'Roboto',
  gridArea: 'title',
  fontWeight: '$bold',
  color: '$white',
  fontSize: '$xl',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: 'Roboto',
  gridArea: 'description',
  color: '$gray200',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$short',
})

export const ToastAction = styled(Toast.Action, {
  width: '25px',
  height: '25px',
  gridArea: 'initial',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '32px',
  right: '32px',
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 10,
  outline: 'none',
})
