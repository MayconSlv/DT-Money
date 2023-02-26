import logoImg from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent, TransactinButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <TransactinButton>Nova transação</TransactinButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
