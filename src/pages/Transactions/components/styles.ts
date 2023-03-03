import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1.6rem;

  input {
    flex: 1;
    background: ${({ theme }) => theme['gray-700']};
    border-radius: 6px;
    border: none;

    padding: 1.6rem;

    color: ${({ theme }) => theme['gray-200']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-300']};
    }

    &:active {
      outline: none;
      border: 1px solid ${({ theme }) => theme['green-light']};
    }
  }

  button {
    display: flex;
    justify-content: center;
    gap: 1.2rem;

    padding: 1.4rem 3.2rem;

    background: ${({ theme }) => theme['gray-700']};
    color: ${({ theme }) => theme['green-light']};

    border: 1px solid ${({ theme }) => theme['green-light']};
    border-radius: 6px;

    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-light']};
      color: ${({ theme }) => theme.white};
      transition: background-color 0.2s;
    }
  }
`
