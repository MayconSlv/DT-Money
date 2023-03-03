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
import { SearchForm } from './components'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function TransactionsPage() {
  const { transactions } = useContext(TransactionsContext)

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
            {transactions?.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
