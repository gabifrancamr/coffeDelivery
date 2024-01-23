import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../assets/Logo.svg'
import { Actions, HeaderContent, Localization, QuantityItems } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartProvider'

export function Header() {
  const { quantityTotal } = useContext(CartContext)
  return (
    <HeaderContent>
      <NavLink to="">
        <img src={logo} alt="Logo do CoffeDelivery" />
      </NavLink>
      <Actions>
        <Localization>
          <MapPin size={24} weight="fill" />
          <span>Brasil</span>
        </Localization>
        <NavLink to="/checkout">
          {quantityTotal > 0 ? (
            <>
              <ShoppingCart size={24} weight="fill" />
              <QuantityItems>{quantityTotal}</QuantityItems>
            </>
          ) : (
            <ShoppingCart size={24} weight="fill" />
          )}
        </NavLink>
      </Actions>
    </HeaderContent>
  )
}
