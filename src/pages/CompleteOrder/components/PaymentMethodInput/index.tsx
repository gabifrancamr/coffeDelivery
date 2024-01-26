import { CreditCard } from 'phosphor-react'
import { ContentContainer } from './styles'
export function PaymentMethodInput() {
  return (
    <ContentContainer>
      <CreditCard size={16} />
      Cartão de Crédito
    </ContentContainer>
  )
}
