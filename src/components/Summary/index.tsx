import { SummaryContainer, SummaryHeader } from './styles'
import { ReactNode } from 'react'

interface SummaryProps {
  icon: ReactNode
  value: number
  type: string
  variant?: string
}

export function Summary({ icon, value, type, variant }: SummaryProps) {
  return (
    <SummaryContainer variant={variant}>
      <SummaryHeader>
        <span>{type}</span>
        {icon}
      </SummaryHeader>
      <strong>{value}</strong>
    </SummaryContainer>
  )
}
