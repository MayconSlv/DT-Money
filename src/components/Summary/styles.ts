import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface SummaryContainerProps {
  variant: ReactNode
}

export const SummaryContainer = styled.div<SummaryContainerProps>`
  padding: 2.4rem;
  border-radius: 6px;

  width: 35.2rem;

  background: ${({ theme }) => theme['gray-400']};
  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['base-green']};
    `}

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
`
