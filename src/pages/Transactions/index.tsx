import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SummaryDisplay } from './styles'
import { useTheme } from 'styled-components'

export function Transactions() {
  const colors = useTheme()
  return (
    <div>
      <Header />

      <SummaryDisplay>
        <Summary
          icon={<ArrowCircleUp size={32} color={colors['base-green']} />}
          type="Entradas"
          value="17.400,00"
        />
        <Summary
          icon={<ArrowCircleDown size={32} color={colors['base-red']} />}
          type="Saídas"
          value="1.250,00"
        />
        <Summary
          icon={<CurrencyDollar size={32} color={colors.white} />}
          type="Total"
          value="1.250,00"
          variant="green"
        />
      </SummaryDisplay>
    </div>
  )
}
