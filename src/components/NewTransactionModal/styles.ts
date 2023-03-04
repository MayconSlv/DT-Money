import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #00000075;
`

export const Content = styled(Dialog.Content)`
  min-width: 51.2rem;
  border-radius: 6px;
  padding: 4.8rem;
  background: ${({ theme }) => theme['gray-600']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input {
      border-radius: 6px;
      border: 0;

      padding: 1.6rem;

      background: ${({ theme }) => theme['gray-700']};
      color: ${({ theme }) => theme['gray-200']};

      &::placeholder {
        color: ${({ theme }) => theme['gray-300']};
      }
    }

    button[type='submit'] {
      border: none;
      border-radius: 6px;

      height: 58px;
      padding: 1.6rem 3.2rem;

      font-weight: bold;
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme['base-green']};

      margin-top: 3rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme['green-dark']};
        transition: background-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;

  top: 2.4rem;
  right: 2.4rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-300']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  margin-top: 0.8rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme['gray-500']};
  color: ${({ theme }) => theme['gray-200']};
  padding: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['base-green']
        : props.theme['base-red']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${({ theme }) => theme['gray-400']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['base-green']
        : props.theme['base-red']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
