import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SummaryDisplay } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />

      <SummaryDisplay>
        <Summary />
        <Summary />
        <Summary />
      </SummaryDisplay>
    </div>
  )
}
