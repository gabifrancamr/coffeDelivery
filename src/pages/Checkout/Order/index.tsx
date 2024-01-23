import { Minus, Plus, Trash } from 'phosphor-react'
import { ContentCheckbox, PurpleIcon } from '../styles'
import { QuantityArea } from '../../Home/styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
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
} from './styles'

export function Order() {
  const { cartItems } = useContext(CartContext)
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
                  <button>
                    <Minus />
                  </button>
                  <span>{item.quantity}</span>
                  <button>
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
            <PriceCoffe>R$ {item.price}</PriceCoffe>
          </SelectedCoffe>
        ))}

        <PriceArea>
          <div>
            <SmallFont>Total Itens</SmallFont>
            <span>R$ 9,90</span>
          </div>
          <div>
            <SmallFont>Entrega</SmallFont>
            <span>R$ 5,00</span>
          </div>
          <BoldFont>
            <span>Total</span>
            <span>R$ 14,90</span>
          </BoldFont>
          <NavLink to="/success">
            <ConfirmationButton>Confirmar Pedido</ConfirmationButton>
          </NavLink>
        </PriceArea>
      </StyleSelectCoffe>
    </ContentCheckbox>
  )
}
