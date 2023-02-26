import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 4rem 0 12.2rem;

  background: ${(props) => props.theme['gray-700']};
`
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;
`
export const TransactinButton = styled.button`
  padding: 1.2rem 2rem;
  border-radius: 6px;
  border: none;

  font-weight: 700;
  background-color: ${(props) => props.theme['base-green']};
  color: ${(props) => props.theme.white};

  cursor: pointer;

  &:hover {
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme['green-dark']};
  }
`
