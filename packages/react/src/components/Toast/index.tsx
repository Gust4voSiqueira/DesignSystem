import { useState, useRef, useEffect } from 'react'
import { Button } from '../Button'
import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import { Provider } from '@radix-ui/react-toast'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface ToastProps {
  title: string
  date: Date
}

function prettyDate(date: Date) {
  return format(date, "eeee, d 'de' MMMM 'às' HH'h'", {
    locale: ptBR,
  })
}

export function Toast({ title, date }: ToastProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <Provider swipeDirection="right">
      <Button
        variant={'primary'}
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            const now = new Date()
            const inOneWeek = now.setDate(now.getDate() + 7)
            eventDateRef.current = new Date(inOneWeek)
            setOpen(true)
          }, 100)
        }}
      >
        Abrir
      </Button>
      <ToastContainer open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>

        <ToastDescription>
          <time dateTime="2023-10-26T16:00:00">{prettyDate(date)}</time>
        </ToastDescription>

        <ToastAction asChild altText="Fechar">
          <X color="#A9A9B2" weight="bold" />
        </ToastAction>
      </ToastContainer>
      <ToastViewport />
    </Provider>
  )
}
