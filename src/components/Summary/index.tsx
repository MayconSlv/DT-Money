import { ArrowCircleUp } from 'phosphor-react'
import { SummaryContainer, SummaryHeader } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryHeader>
        <span>Entradas</span>
        <ArrowCircleUp size={32} />
      </SummaryHeader>
      <strong>R$ 17.400,00</strong>
    </SummaryContainer>
  )
}
