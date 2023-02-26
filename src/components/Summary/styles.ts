import styled from 'styled-components'

export const SummaryContainer = styled.div`
  padding: 2.4rem;
  border-radius: 6px;

  background: ${({ theme }) => theme['gray-400']};

  width: 35.2rem;

  strong {
    font-weight: 700;
    font-size: 3.2rem;
  }
`

export const SummaryHeader = styled.header`
  display: flex;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme['gray-200']};
  }

  svg {
    color: ${({ theme }) => theme['base-green']};
  }
`
