import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  SummaryDisplay,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { useTheme } from 'styled-components'
import { SearchForm } from './components/SearchForm'

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

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimetno de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
