import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import {
  Actions,
  HeaderContainer,
  Localization,
  ShoppingCartButton,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/UseCart'

export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <NavLink to="">
        <img src={logo} alt="Logo do CoffeDelivery" />
      </NavLink>
      <Actions>
        <Localization>
          <MapPin size={24} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Localization>
        <NavLink to="/checkout">
          <ShoppingCartButton>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartButton>
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
