import { Minus, Plus, Trash } from 'phosphor-react'
import { QuantityArea } from '../../Home/styles'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../contexts/CartProvider'
import {
  BoldFont,
  PriceArea,
  PriceCoffe,
  ConfirmationButton,
  QuantityAndButton,
  RemoveButton,
  SelectedCoffe,
  SmallFont,
  StyleSelectCoffe,
  ContentCheckbox,
  PurpleIcon,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function Order() {
  const [shipping, setShipping] = useState(0)
  const { watch } = useFormContext()

  const city = watch('cidade')

  useEffect(() => {
    if (city) {
      setShipping(5.99)
    }
  }, [city])

  const {
    cartItems,
    totalPrice,
    decreaseQuantity,
    increaseQuantity,
    totalPriceOfEachItem,
  } = useContext(CartContext)

  function handleIncreaseQuantity(id: string) {
    increaseQuantity(id)
  }

  function handleDecreaseQuantity(id: string) {
    decreaseQuantity(id)
  }

  return (
    <ContentCheckbox>
      <h1>Cafés selecionados</h1>
      <StyleSelectCoffe>
        {cartItems.map((item) => (
          <SelectedCoffe key={item.id}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <p>{item.name}</p>
              <QuantityAndButton>
                <QuantityArea>
                  <button onClick={() => handleDecreaseQuantity(item.id)}>
                    <Minus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>
                    <Plus />
                  </button>
                </QuantityArea>
                <RemoveButton>
                  <PurpleIcon>
                    <Trash size={18} />
                  </PurpleIcon>
                  <span>remover</span>
                </RemoveButton>
              </QuantityAndButton>
            </div>
            <PriceCoffe>R$ {totalPriceOfEachItem(item)}</PriceCoffe>
          </SelectedCoffe>
        ))}

        <PriceArea>
          <div>
            <SmallFont>Total Itens</SmallFont>
            <span>R$ {totalPrice}</span>
          </div>
          <div>
            <SmallFont>Entrega</SmallFont>
            <span>R$ {shipping}</span>
          </div>
          <BoldFont>
            <span>Total</span>
            {shipping > 0 ? (
              <span>R$ {(totalPrice + 5.99).toFixed(2)}</span>
            ) : (
              <span>R$ {totalPrice}</span>
            )}
          </BoldFont>
          <NavLink to="/success">
            <ConfirmationButton>Confirmar Pedido</ConfirmationButton>
          </NavLink>
        </PriceArea>
      </StyleSelectCoffe>
    </ContentCheckbox>
  )
}
