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
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function TransactionsPage() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  const summary = useSummary()

  const colors = useTheme()
  return (
    <div>
      <Header />

      <SummaryDisplay>
        <Summary
          icon={<ArrowCircleUp size={32} color={colors['base-green']} />}
          type="Entradas"
          value={summary.income}
        />
        <Summary
          icon={<ArrowCircleDown size={32} color={colors['base-red']} />}
          type="Saídas"
          value={summary.outcome}
        />
        <Summary
          icon={<CurrencyDollar size={32} color={colors.white} />}
          type="Total"
          value={summary.total}
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
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
