import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/UseCart'
import { FormatMoney } from '../../../../utils/formatMoney'

import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartTotalPrice } = useCart()
  const priceWithDelivery = cartTotalPrice + DELIVERY_PRICE

  const formattedDelivery = FormatMoney(DELIVERY_PRICE)
  const formattedCartTotalPrice = FormatMoney(cartTotalPrice)
  const formattedPriceWithDelivery = FormatMoney(priceWithDelivery)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedCartTotalPrice} </RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDelivery}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedPriceWithDelivery}
        </RegularText>
      </div>
      <Button text="confirmar pedido" />
    </ConfirmationSectionContainer>
  )
}
