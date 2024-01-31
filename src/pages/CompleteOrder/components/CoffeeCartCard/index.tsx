import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

import { CartItem } from '../../../../contexts/CartContext'
import { FormatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/UseCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeQuantityCoffee, removeCoffee } = useCart()
  const totalCoffeePrice = coffee.price * coffee.quantity

  const formattedTotalCoffeePrice = FormatMoney(totalCoffeePrice)

  function handleIncrease() {
    changeQuantityCoffee(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeQuantityCoffee(coffee.id, 'decrease')
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.photo} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              size="small"
            />
            <RemoveButton onClick={() => removeCoffee(coffee.id)}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedTotalCoffeePrice}</p>
    </CoffeeCartCardContainer>
  )
}
