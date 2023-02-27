import styled from 'styled-components'

export const SummaryDisplay = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: -7rem;
`
export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 6rem auto 0;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8rem;
  margin-top: 2.4rem;

  td {
    background: ${({ theme }) => theme['gray-500']};
    padding: 2rem 3.2rem;
    color: ${({ theme }) => theme['gray-200']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-light']
      : props.theme['base-red']};
`
