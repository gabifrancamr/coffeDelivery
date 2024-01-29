import { ShoppingCart } from 'phosphor-react'
import { RegularText, TitleText } from '../../../../components/Typography'
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'
import { QuantityInput } from '../../../../components/QuantityInput'
import { FormatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncreased() {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  function handleDecreased() {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  const { addCoffeeToCard } = useCart()

  function handleAddCoffeeToCard() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCard(coffeeToAdd)
  }

  const formattedPrice = FormatMoney(coffee.price)
  return (
    <CoffeeCardContainer>
      <img src={coffee.photo} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncreased}
            onDecrease={handleDecreased}
            quantity={quantity}
          />
          <button onClick={handleAddCoffeeToCard}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
