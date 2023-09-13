import { useState } from 'react'

import { ptBR } from 'date-fns/locale'
import { format } from 'date-fns'

import { Arrow, Content, TriggerAvaliable, TriggerUnavailable } from './styles'
import { Portal, Provider, Root } from '@radix-ui/react-tooltip'

function prettyDate(date: Date) {
  return format(date, "d 'de' MMMM", {
    locale: ptBR,
  })
}

export interface TooltipProps {
  isAvailable: boolean
  date: Date
}

function RenderTrigger({ isAvailable, date }: TooltipProps) {
  const formattedDate = format(date, 'd')

  if (isAvailable) {
    return (
      <TriggerAvaliable asChild>
        <button>{formattedDate}</button>
      </TriggerAvaliable>
    )
  }

  return (
    <TriggerUnavailable asChild>
      <button>{formattedDate}</button>
    </TriggerUnavailable>
  )
}

export function Tooltip({ date, isAvailable }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const textIsAvaliable = isAvailable ? (
    <span>Disponível</span>
  ) : (
    <span>Indisponível</span>
  )

  function handleOpenTooltip() {
    setIsOpen(!isOpen)
  }

  return (
    <Provider>
      <Root open={isOpen} delayDuration={5} onOpenChange={handleOpenTooltip}>
        <RenderTrigger date={date} isAvailable={isAvailable} />
        <Portal>
          <Content side="top" sideOffset={-10}>
            <time dateTime="2023-10-26T16:00:00">
              {prettyDate(date)} - {textIsAvaliable}
            </time>
            <Arrow />
          </Content>
        </Portal>
      </Root>
    </Provider>
  )
}
